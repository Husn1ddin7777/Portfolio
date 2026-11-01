import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Husniddin | Economist & Founder",
  description: "Economist and founder from Tashkent, building AI-powered products for Uzbekistan: LexiLift, Afnan.CRM, websiite.uz and more.",
  keywords: "Husniddin, Husniddin Izzatullayev, Economist, Founder, LexiLift, Afnan.CRM, websiite.uz, Tashkent, Uzbekistan, Startups, Portfolio",
  authors: [{ name: "Husniddin" }],
  creator: "Husniddin",
  publisher: "Husniddin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Husniddin | Economist & Founder",
    description: "Economist by training, founder by choice. Building products for Uzbekistan.",
    siteName: "Husniddin's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husniddin | Economist & Founder",
    description: "Economist by training, founder by choice. Building products for Uzbekistan.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID}/>}
    </html>
  );
}
