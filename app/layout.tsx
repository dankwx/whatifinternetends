import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What if Internet Ends",
  description: "A collection of must-have to save in your coomputer if the internet ends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
