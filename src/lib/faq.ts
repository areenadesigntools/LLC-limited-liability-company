export const faqs = [
  {
    q: "Can I form a US LLC without visiting the United States?",
    a: "Yes. The entire process is done remotely. You share a few details and a passport copy, and we prepare and file everything online.",
  },
  {
    q: "Can I get an EIN without an SSN or ITIN?",
    a: "Yes. We prepare and submit Form SS-4 through the correct channel for applicants who don't have an SSN, and send you the official EIN confirmation.",
  },
  {
    q: "Do I have to file US taxes if my LLC had no income?",
    a: "Often, yes. Foreign-owned single-member LLCs usually must file Form 5472 with a pro-forma 1120 even with no US income. Missing it carries steep penalties, so we track and file it for you.",
  },
  {
    q: "Which state should I choose?",
    a: "It depends on your business. We commonly set up in Wyoming, Delaware or New Mexico and recommend the best fit for your situation during your consultation.",
  },
  {
    q: "Are state and government fees included in your prices?",
    a: "No — our service fee is shown separately from government and state filing fees, which we never mark up. You always see both before you pay.",
  },
  {
    q: "Do you guarantee approval of an EIN, ITIN or bank account?",
    a: "No honest provider can. Government processing and approvals are outside anyone's control. We prepare your applications correctly to give you the best possible chance.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
