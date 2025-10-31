import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "What if Internet Ends - Digital Survival Guide & Offline Resources",
    template: "%s | What if Internet Ends"
  },
  description:
    "Your all-in-one collection of digital groceries if the Internet goes down forever. Download guides, software, games, Wikipedia offline, and prepare for digital survival. Essential resources for internet outage preparedness.",
  keywords: [
    "internet outage",
    "offline survival",
    "digital preparedness",
    "download wikipedia",
    "offline software",
    "internet apocalypse",
    "data hoarding",
    "offline resources",
    "survival guide",
    "digital backup",
    "offline entertainment",
    "kiwix",
    "offline wikipedia",
    "internet shutdown",
    "digital survival",
    "offline tools",
    "mesh network",
    "local network",
    "no internet solutions",
    "internet collapse"
  ],
  authors: [{ name: "What if Internet Ends" }],
  creator: "What if Internet Ends",
  publisher: "What if Internet Ends",
  metadataBase: new URL('https://www.whatifinternetends.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "What if Internet Ends - Digital Survival Guide & Offline Resources",
    description: "Your all-in-one collection of digital groceries if the Internet goes down forever. Download guides, software, games, and prepare for digital survival.",
    url: 'https://www.whatifinternetends.com',
    siteName: 'What if Internet Ends',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'What if Internet Ends - Digital Survival Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What if Internet Ends - Digital Survival Guide',
    description: 'Prepare for the internet apocalypse. Essential offline resources, software, and survival guides.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: '/manifest.json',
  category: 'education',
  applicationName: 'What if Internet Ends',
  appleWebApp: {
    capable: true,
    title: 'Internet Ends Guide',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "What if Internet Ends",
    "url": "https://www.whatifinternetends.com",
    "description": "Your all-in-one collection of digital groceries if the Internet goes down forever. Essential resources for offline survival.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.whatifinternetends.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@type": "Thing",
      "name": "Digital Preparedness",
      "description": "Resources and guides for internet outage survival"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9QMGG0T44L"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <link rel="icon" href="./favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
