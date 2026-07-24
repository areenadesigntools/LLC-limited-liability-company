// Google Analytics 4 Setup
export function initGA(): void {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA_ID) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(command: string, ...args: any[]) {
    (window.dataLayer as any).push({
      'event': command,
      ...args,
    });
  }
  gtag('js', new Date());
  gtag('config', process.env.NEXT_PUBLIC_GA_ID);

  (window as any).gtag = gtag;
}

// Track page views
export function trackPageView(path: string, title: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}

// Track events
export function trackEvent(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData || {});
  }
}

// Track form submission
export function trackFormSubmission(formName: string, formData?: Record<string, any>): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      form_name: formName,
      ...(formData || {}),
    });
  }
}

// Track CTA clicks
export function trackCTAClick(ctaText: string, location: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      cta_text: ctaText,
      location,
    });
  }
}

// Track service selection
export function trackServiceSelection(serviceId: string, serviceName: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'select_item', {
      item_id: serviceId,
      item_name: serviceName,
    });
  }
}

// Track external link clicks
export function trackExternalLink(url: string, label: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'external',
      event_label: label,
      value: url,
    });
  }
}
