import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://devinesparkle.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Devine Sparkle & Shine | Personal Omaha Cleaning Service",
  description: "Tanya Cleans, You Relax. Omaha's most trusted personal cleaning service for homes and businesses. Get your Saturday back.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Devine Sparkle & Shine | Omaha Personal Cleaning",
    description: "Tanya's direct, owner-operated cleaning for homes and offices. No franchises, just trust.",
    url: baseUrl,
    siteName: "Devine Sparkle & Shine",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Devine Sparkle & Shine",
    "image": "https://devinesparkle.com/tanya-hero.jpg",
    "@id": "https://devinesparkle.com",
    "url": "https://devinesparkle.com",
    "telephone": "+14020000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Omaha",
      "addressRegion": "NE",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.2565,
      "longitude": -95.9345
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen bg-bg-warm">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
