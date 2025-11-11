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
    "Add your professional description here. Describe your skills, experience, and what makes you unique in your field.",
  keywords: [
    "add",
    "your",
    "keywords",
    "here",
    "relevant",
    "to",
    "your",
    "profession",
    "and",
    "skills",
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  publisher: "Your Name",
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
    url: "https://yourwebsite.com",
    title: "Your Name - Add Your Professional Title",
    description:
      "Add your professional description here for social media sharing.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Add Your Professional Title",
    description: "Add your professional description here for Twitter sharing.",
    creator: "@yourtwitterhandle",
    images: ["/avatar.jpg"],
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
