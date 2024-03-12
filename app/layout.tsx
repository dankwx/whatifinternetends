import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What if Internet Ends",
  description:
    "Your all-in-one collection of digital groceries if the Internet goes down forever, you need to be prepared",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
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
        <link rel="icon" href="./favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
