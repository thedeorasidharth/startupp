import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import SmoothScroll from "@/components/common/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novastudio.com"),
  title: "Nova Studio — Building Digital Brands That People Remember",
  description:
    "Nova Studio is a premium digital agency specializing in Web Development, SEO, Branding, Social Media Management, Video Editing, and Digital Marketing. We build digital experiences that drive business growth.",
  keywords: [
    "digital agency",
    "web development",
    "SEO",
    "branding",
    "social media",
    "video editing",
    "Nova Studio",
  ],
  openGraph: {
    title: "Nova Studio — Building Digital Brands That People Remember",
    description:
      "Premium digital agency specializing in Web Development, SEO, Branding, and Digital Marketing.",
    url: "https://novastudio.com",
    siteName: "Nova Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Studio — Building Digital Brands That People Remember",
    description:
      "Premium digital agency specializing in Web Development, SEO, Branding, and Digital Marketing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-inter bg-background text-foreground antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
