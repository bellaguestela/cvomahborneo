import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV OMAH BORNEO IT - Solusi Teknologi Terpercaya",
  description: "CV OMAH BORNEO IT adalah perusahaan teknologi yang menyediakan layanan pemrograman komputer, alat elektronik, dan konsultasi IT profesional di Kalimantan Tengah.",
  keywords: ["CV OMAH BORNEO IT", "IT Solutions", "Pemrograman Komputer", "Alat Elektronik", "Konsultasi IT", "Kalimantan Tengah", "Technology", "Software Development"],
  authors: [{ name: "CV OMAH BORNEO IT" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "CV OMAH BORNEO IT - Solusi Teknologi Terpercaya",
    description: "Spesialis dalam pemrograman komputer, alat elektronik, dan layanan IT profesional di Kalimantan Tengah",
    url: "https://omahborneoit.com",
    siteName: "CV OMAH BORNEO IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV OMAH BORNEO IT - Solusi Teknologi Terpercaya",
    description: "Spesialis dalam pemrograman komputer, alat elektronik, dan layanan IT profesional di Kalimantan Tengah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="umvydk84exi4ysrecp3onjjdt6f5td" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
