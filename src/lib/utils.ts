// Utility functions for formatting and data manipulation

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCountryName(code: string): string {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return regionNames.of(code) || code;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0]?.toUpperCase())
    .join('')
    .slice(0, 2);
}

export function parsePhoneForWhatsApp(phone: string): string {
  // Extract numbers only
  const cleaned = phone.replace(/\D/g, '');
  // If it's a Pakistan number starting with 0, replace with +92
  if (phone.startsWith('03') || phone.startsWith('0371')) {
    return '+92' + cleaned.slice(1);
  }
  // If it already has country code
  if (cleaned.startsWith('92')) {
    return '+' + cleaned;
  }
  // Return as is
  return phone;
}

export function generateMessageForService(serviceSlug: string): string {
  const messages: Record<string, string> = {
    'free-llc-registration': 'Hello, I would like information about Free LLC Registration.',
    'llc-formation': 'Hello, I need assistance with LLC Formation.',
    'ein-application': 'Hello, I need assistance with an EIN Application.',
    'itin-application': 'Hello, I need assistance with an ITIN Application.',
    'registered-agent': 'Hello, I need information about Registered Agent services.',
    'reseller-certificate': 'Hello, I need assistance with a Reseller Certificate.',
    'tax-services': 'Hello, I would like information about Tax Services.',
    'payment-accounts': 'Hello, I need assistance with Payment Account setup.',
    'contact': 'Hello, I would like a free consultation.',
    'general': 'Hello, I would like a free consultation.',
  };
  return messages[serviceSlug] || messages['general'];
}

export function getWhatsAppUrl(message?: string, phone?: string): string {
  const whatsappPhone = phone || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+923712559501';
  const phoneNumber = whatsappPhone.replace(/\D/g, '');
  const encoded = encodeURIComponent(message || 'Hello');
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}
