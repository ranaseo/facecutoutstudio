import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const display = localFont({
  src: "../fonts/bricolage-grotesque.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});

const body = localFont({
  src: "../fonts/onest.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Face Cutout Design Service for Etsy & Shopify Sellers | Face Cutout Studio",
    template: "%s | Face Cutout Studio",
  },
  description:
    "Print-ready face cutouts, sticker sheets, tattoo files and cup wraps from your customers' photos. 300 DPI, cut line included, 12–24h turnaround. First 3 cutouts free.",
  authors: [{ name: SITE.founder }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Face Cutout Studio: face cutout design for Etsy and Shopify sellers",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  other: { "theme-color": "#D81B63" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
