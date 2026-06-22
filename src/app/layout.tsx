import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYPE SHIII | Luxury Streetwear - Built For Trend Setters",
  description: "Premium streetwear fashion brand. Built For Those Who Set Trends, Not Follow Them.",
  keywords: "streetwear, fashion, luxury, urban, clothing, TYPE SHIII",
  authors: [{ name: "TYPE SHIII" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-brand-black text-brand-offWhite`}>
        {children}
      </body>
    </html>
  );
}
