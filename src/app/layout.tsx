import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DC Regent Group | Venture Group & Holding Company",
  description:
    "DC Regent Group is a venture group and holding company building businesses across fashion, digital services, and consumer experiences. We develop, operate, and support ventures with long-term vision.",
  keywords: [
    "venture group",
    "holding company",
    "AI ventures",
    "digital services",
    "DC Regent Group",
    "DCRG",
    "business development",
    "startup",
    "entrepreneurship",
  ],
  authors: [{ name: "DC Regent Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dcrgp.com",
    siteName: "DC Regent Group",
    title: "DC Regent Group | Venture Group & Holding Company",
    description:
      "DC Regent Group is a venture group and holding company building businesses across fashion, digital services, and consumer experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Regent Group | Venture Group & Holding Company",
    description:
      "DC Regent Group is a venture group and holding company building businesses across fashion, digital services, and consumer experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} font-sans antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
