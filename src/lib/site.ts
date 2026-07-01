export const site = {
  name: "LLC Limited Liability Company",
  shortName: "LLC",
  phone: "+1 (000) 000-0000",
  whatsappNumber: "10000000000", // replace with real number (digits only)
  whatsappText: "Hi, I want to start a US LLC",
  email: "hello@example.com",
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappText
)}`;

export type Service = {
  title: string;
  blurb: string;
  price: string;
  href: string;
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    title: "LLC Formation",
    blurb: "Your US company, filed in the right state.",
    price: "from $199 + state fee",
    href: "/services/llc-formation",
    icon: "Building2",
  },
  {
    title: "EIN Registration",
    blurb: "Your federal tax ID — even without an SSN.",
    price: "from $99",
    href: "/services/ein-registration",
    icon: "Hash",
  },
  {
    title: "ITIN Registration",
    blurb: "Your individual taxpayer number for US filings.",
    price: "from $149",
    href: "/services/itin-registration",
    icon: "IdCard",
  },
  {
    title: "US Tax Filing",
    blurb: "Forms 1120 + 5472 and more, filed on time.",
    price: "from $299",
    href: "/services/us-tax-filing",
    icon: "FileText",
  },
  {
    title: "Registered Agent",
    blurb: "A required US address to receive legal mail.",
    price: "from $99/yr",
    href: "/services/registered-agent",
    icon: "MapPin",
  },
  {
    title: "US Business Address",
    blurb: "A real US address for mail and verification.",
    price: "from $19/mo",
    href: "/services/us-business-address",
    icon: "Mailbox",
  },
  {
    title: "Bank Account Guidance",
    blurb: "Get approved with the right documents and approach.",
    price: "from $129",
    href: "/services/bank-account-guidance",
    icon: "Landmark",
  },
  {
    title: "Sales Tax / Reseller",
    blurb: "Sell and resell compliantly across states.",
    price: "from $149",
    href: "/services/reseller-certificate",
    icon: "ReceiptText",
  },
  {
    title: "Annual Compliance",
    blurb: "Reports, BOI and deadlines — handled for you.",
    price: "from $149/yr",
    href: "/services/annual-compliance",
    icon: "ShieldCheck",
  },
];

export const navServices = services.map((s) => ({ title: s.title, href: s.href }));
