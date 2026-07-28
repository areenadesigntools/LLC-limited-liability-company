import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { contactFormSchema } from '@/lib/validations';

export const runtime = 'nodejs';

const mailConfigurationSchema = z.object({
  host: z.string().min(1),
  port: z.coerce.number().int().positive(),
  user: z.string().min(1),
  password: z.string().min(1),
  recipient: z.string().email(),
  from: z.string().min(1),
  secure: z.boolean(),
});

function getMailConfiguration() {
  const port = process.env.SMTP_PORT || '587';

  return mailConfigurationSchema.safeParse({
    host: process.env.SMTP_HOST,
    port,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    recipient: process.env.CONTACT_EMAIL,
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    secure: process.env.SMTP_SECURE === 'true' || port === '465',
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    if (validation.data.website?.trim()) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
      });
    }

    const mailConfiguration = getMailConfiguration();

    if (!mailConfiguration.success) {
      console.error('Contact form email delivery is not configured.');
      return NextResponse.json(
        { error: 'Contact form delivery is temporarily unavailable.' },
        { status: 503 }
      );
    }

    const { host, port, user, password, recipient, from, secure } = mailConfiguration.data;
    const { name, email, phone, service, subject, message } = validation.data;
    const safeSubject = subject.replace(/[\r\n]+/g, ' ').trim();

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass: password,
      },
    });

    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: email,
      subject: `Website enquiry: ${safeSubject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    });
  } catch (error: unknown) {
    console.error(
      'Contact form delivery failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
