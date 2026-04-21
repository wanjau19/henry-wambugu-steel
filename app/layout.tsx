import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rina Steel| Premium Steel & Metal Works Nairobi",
  description: "Custom-crafted steel gates, metallic doors, furniture and welding solutions in Nairobi Kenya. Built with precision and made to last. Call 0722 909 059.",
  keywords: "wambugu henry steel, henry wambugu steel, steel gates nairobi, metallic doors kenya, steel furniture, window grills, welding nairobi, henry wambugu nairobi",
  manifest: "/manifest.json",
  verification: {
    google: "Ycdkm8iR9ZrDH0GamyThJZWudgtA1LwzVhb_5Cs59lU",
  },
  openGraph: {
    title: "Rina Steel | Premium Steel & Metal Works",
    description: "Custom steel gates, doors, furniture and welding in Nairobi Kenya.",
    url: "https://henry-steel.vercel.app",
    siteName: "Rina Steel Works",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#e8560a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
