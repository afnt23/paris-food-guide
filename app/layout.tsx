import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oui Oui Baguette Croissant",
    template: "%s | OOBC",
  },
  description:
    "Oui Oui Baguette Croissant (OOBC): a minimal, cinematic guide to the rooms we actually love eating and drinking in Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
