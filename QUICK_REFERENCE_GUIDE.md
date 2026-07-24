# Quick Reference Guide - Extending the Project

## Adding Individual Service Pages

### Quick Steps to Add 5 Service Pages

Copy `SERVICE_PAGE_TEMPLATE.md` and create folders for each service:

1. **LLC Formation** (`/app/llc-formation/page.tsx`)
2. **EIN Application** (`/app/ein-application/page.tsx`)
3. **ITIN Application** (`/app/itin-application/page.tsx`)
4. **Registered Agent** (`/app/registered-agent/page.tsx`)
5. **Reseller Certificate** (`/app/reseller-certificate/page.tsx`)

For each page, change these values:

```typescript
const SERVICE_SLUG = 'llc-formation'; // Your service
const SERVICE_NAME = 'LLC Formation';
const SERVICE_DESCRIPTION = 'Professional LLC formation assistance...';
const SERVICE_ICON = '📋'; // Pick an emoji
```

---

## Editing Content Without Code Changes

All content is in **`src/data/`** - edit these files directly:

### 1. Update Services List
File: `src/data/services.ts`
```typescript
export const services: Service[] = [
  {
    id: 'free-llc',
    name: 'Free LLC Registration',
    description: 'Basic LLC formation assistance',
    icon: 'Zap',
    href: '/free-llc-registration', // Change URLs here
    isPopular: true,
  },
  // ... add more services
];
```

### 2. Update Tax Services
File: `src/data/taxServices.ts`
```typescript
export const taxServices: TaxService[] = [
  {
    id: 'state-tax-filing',
    name: 'State Tax Filing',
    description: 'Professional state tax filing...',
    // ...
  },
];
```

### 3. Update FAQ Items
File: `src/data/faq.ts`
```typescript
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is an LLC?',
    answer: 'An LLC is a business structure...',
    category: 'Free LLC Registration',
  },
];
```

### 4. Update Company Info
File: `src/data/company.ts`
```typescript
export const companyInfo = {
  phone: '+92 371 2559501',
  email: 'info@llclimitedliabilitycompany.com',
  address: 'B-206, Block A, North Nazimabad, Karachi',
  // ... update these values
};
```

### 5. Update State Fees
File: `src/data/stateFees.ts`
```typescript
export const stateFees: StateFee[] = [
  { code: 'AL', name: 'Alabama', fee: 250, processingDays: 5 },
  // Add or update state fees
];
```

---

## Customizing Design

### Change Brand Colors
File: `tailwind.config.ts`

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563eb', // Change this
        'primary-dark': '#0b1220', // Change this
      },
    },
  },
};
```

### Update Logo
File: `src/components/layout/Header.tsx`

Find the logo section:
```typescript
<div className="flex items-center gap-2">
  {/* Replace with your logo */}
  <div className="w-10 h-10 rounded bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center text-white font-bold">
    LLC
  </div>
</div>
```

### Change Fonts
File: `src/app/layout.tsx`

```typescript
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});
```

---

## Setting Up Email

Add email handler in `src/app/api/contact/route.ts`:

### Option 1: Using Resend (Recommended)
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your route handler:
await resend.emails.send({
  from: 'form@yourdomain.com',
  to: process.env.CONTACT_EMAIL,
  subject: `New contact: ${data.subject}`,
  html: `<p>From: ${data.email}</p><p>${data.message}</p>`,
});
```

### Option 2: Using Nodemailer
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL,
  subject: `New contact: ${data.subject}`,
  html: `<p>From: ${data.email}</p><p>${data.message}</p>`,
});
```

Update `.env.local`:
```
RESEND_API_KEY=xxx
# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@llclimitedliabilitycompany.com
```

---

## Adding Payment Processing

### Stripe Integration
File: `src/app/api/checkout/route.ts`

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.json();
  
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: body.serviceName,
          },
          unit_amount: body.amount * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${body.successUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: body.cancelUrl,
  });

  return Response.json({ sessionId: session.id });
}
```

Update `.env.local`:
```
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

---

## Running Tests

### Lint Check
```bash
npm run lint
```

### Build Check
```bash
npm run build
```

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

---

## Useful File Locations

| Purpose | File |
|---------|------|
| Main layout | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |
| UI components | `src/components/ui/` |
| Layout components | `src/components/layout/` |
| Form components | `src/components/forms/` |
| Home sections | `src/components/home/Sections.tsx` |
| Types | `src/types/index.ts` |
| Data | `src/data/` |
| Utilities | `src/lib/` |
| Config | `tailwind.config.ts`, `next.config.ts` |

---

## Adding A New Page

### 1. Create folder
```bash
mkdir -p src/app/new-page
```

### 2. Create file: `src/app/new-page/page.tsx`
```typescript
import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Page Title - LLC Limited Liability Company',
  description: 'Page description here',
  path: '/new-page',
});

export default function NewPage() {
  return (
    <div className="pt-24 pb-20">
      <h1>Page Content</h1>
    </div>
  );
}
```

### 3. Add link in Header
File: `src/components/layout/Header.tsx`
```typescript
<Link href="/new-page" className="...">
  New Page
</Link>
```

---

## Adding Form Validation Schema

File: `src/lib/validations.ts`

```typescript
export const myFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  // ... add more fields
});

export type MyFormData = z.infer<typeof myFormSchema>;
```

---

## Helpful Tailwind Classes

### Spacing
- `p-4` = padding on all sides
- `px-4` = horizontal padding
- `py-4` = vertical padding
- `mt-4` = margin-top
- `mb-4` = margin-bottom

### Display
- `flex` = flexbox
- `grid grid-cols-3` = 3-column grid
- `grid-cols-1 md:grid-cols-3` = 1 column on mobile, 3 on desktop
- `hidden md:block` = hidden on mobile, shown on desktop

### Colors
- `text-primary-blue` = use brand blue
- `bg-primary-dark` = use brand dark
- `bg-gray-50` = light gray background
- `border-2 border-primary-blue` = blue border

### Effects
- `rounded-lg` = border radius
- `shadow-lg` = large shadow
- `hover:bg-blue-50` = hover effect
- `transition-colors` = smooth color transition

---

## Common Issues & Solutions

### Form not submitting?
1. Check console for errors
2. Verify API route exists at `/api/contact/route.ts`
3. Check Zod validation schema

### Styling not applying?
1. Run `npm run dev` (rebuild Tailwind)
2. Check class names are correct
3. Clear cache: `rm -rf .next`

### Page not showing?
1. Check file is named `page.tsx`
2. Verify it's in correct folder
3. Restart dev server

### Images look wrong?
1. Check image paths start with `/public/`
2. Use `<Image>` from `next/image`
3. Add width and height properties

---

## Performance Tips

1. **Use Server Components** by default (no 'use client' unless needed)
2. **Add 'use client'** only for interactive components
3. **Use 'lazy loading'** for images: `loading="lazy"`
4. **Use 'dynamic imports'** for heavy components
5. **Cache queries** when possible
6. **Monitor bundle size**: `npm run build`

---

## SEO Checklist

- [ ] Meta description on each page
- [ ] Keywords in content
- [ ] H1 tag on each page (unique)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on images
- [ ] Breadcrumb schema
- [ ] Sitemap updated
- [ ] robots.txt configured
- [ ] FAQ schema for FAQ page
- [ ] Internal links between pages
- [ ] Google Analytics ID added
- [ ] Search Console verified

---

## Deployment Checklist

- [ ] Update `.env.local` with production values
- [ ] Update `NEXT_PUBLIC_SITE_URL` in config
- [ ] Add logo and favicon
- [ ] Test all forms
- [ ] Setup email notifications
- [ ] Configure analytics
- [ ] Run `npm run build`
- [ ] Test `npm start`
- [ ] Deploy to Vercel or hosting provider

---

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Zod Docs](https://zod.dev)

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
