import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-neutral-50 text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
