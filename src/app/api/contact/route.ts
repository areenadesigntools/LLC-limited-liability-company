import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

// Simple in-memory storage for demo (replace with database in production)
const submissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    const validatedData = contactFormSchema.parse(body);

    // Add honeypot check
    if (body.website) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Store submission (replace with actual email/database logic)
    submissions.push({
      ...validatedData,
      submittedAt: new Date().toISOString(),
      id: Math.random().toString(36).slice(2),
    });

    // In production, send email notification here
    console.log('Form submission received:', validatedData);

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Form submission error:', error);

    if (error.errors) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}

// GET endpoint for admin purposes (remove in production)
export async function GET() {
  return NextResponse.json({
    submissions: submissions.length,
    latest: submissions.slice(-1),
  });
}
