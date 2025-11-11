import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Name - Add Your Title Here",
    template: "%s | Your Name",
  },
  description:
    "I'm Armand, a tutor and business information systems student based in Augsburg, Germany.",
  keywords: [
    "student",
    "tutor",
    "business",
    "information",
    "systems",
    "development",
    "git",
    "open",
    "source",
  ],
  authors: [{ name: "Armand Patrick Asztalos", url: "https://tishutox.vercel.app" }],
  creator: "Armand Patrick Asztalos",
  publisher: "Armand Patrick Asztalos",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tishutox.vercel.app",
    title: "Armand Patrick Asztalos - Business Information Systems Student",
    description:
      "I'm Armand, a tutor and business information systems student based in Augsburg, Germany.",
    siteName: "Armand Patrick Asztalos Portfolio",
    images: [
      {
        url: "/pfp.png",
        width: 1200,
        height: 630,
        alt: "Armand Patrick Asztalos - Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armand Patrick Asztalos - Business Information Systems Student",
    description: "I'm Armand, a tutor and business information systems student based in Augsburg, Germany.",
    creator: "@tishutox",
    images: ["/pfp.png"],
  },
  verification: {
    google: "add-your-google-verification-code-here",
  },
  category: "technology",
  other: {
    "application-name": "Your Portfolio Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
