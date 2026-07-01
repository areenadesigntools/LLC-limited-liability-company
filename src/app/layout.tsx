import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "US LLC, EIN & Tax Filing for Non-Residents | LLC Limited Liability Company",
  description:
    "Form a US LLC remotely with transparent pricing. EIN, ITIN, US tax filing, registered agent and compliance for non-US founders. Book a free consultation.",
  openGraph: {
    title: "Launch your US company from anywhere | LLC Limited Liability Company",
    description:
      "LLC formation, EIN, ITIN, US tax filing and compliance for non-US residents, eCommerce sellers and founders. Transparent pricing, no surprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
