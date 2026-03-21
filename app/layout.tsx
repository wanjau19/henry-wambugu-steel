import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Wambugu | Premium Steel & Metal Works Nairobi",
  description: "Custom-crafted steel gates, metallic doors, furniture and welding solutions in Nairobi Kenya. Built with precision and made to last. Call 0722 909 059.",
  keywords: "wambugu henry steel, henry wambugu steel, steel gates nairobi, metallic doors kenya, steel furniture, window grills, welding nairobi, henry wambugu nairobi",

  verification: {
    google: "Ycdkm8iR9ZrDH0GamyThJZWudgtA1LwzVhb_5Cs59lU",
  },
  openGraph: {
    title: "Henry Wambugu | Premium Steel & Metal Works",
    description: "Custom steel gates, doors, furniture and welding in Nairobi Kenya.",
    url: "https://henry-steel.vercel.app",
    siteName: "Henry Wambugu Steel Works",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
