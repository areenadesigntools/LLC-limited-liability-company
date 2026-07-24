import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { TopBar, Header, Footer, WhatsAppButton } from "@/components/layout";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LLC Limited Liability Company - U.S. Business Formation & Tax Services",
  description: "Start your U.S. business with free LLC registration. Professional business formation, tax filing, and compliance services for entrepreneurs worldwide.",
  keywords: [
    "LLC registration",
    "U.S. business formation",
    "Free LLC",
    "EIN application",
    "ITIN application",
    "Tax filing services",
    "Business incorporation",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://llclimitedliabilitycompany.com"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://llclimitedliabilitycompany.com",
    siteName: "LLC Limited Liability Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE} />
        )}
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://llclimitedliabilitycompany.com"} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-white`}>
        <TopBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        )}
      </body>
    </html>
  );
}
