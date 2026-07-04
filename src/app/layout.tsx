import type { Metadata } from "next";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";

export const metadata: Metadata = {
  title: "Aura Dental Studio | Premium Cosmetic & Family Dentistry",
  description: "Welcome to Aura Dental Studio, a sanctuary of calming luxury and advanced dental artistry. Specializing in cosmetic smile design, Invisalign, dental implants, veneers, and bespoke family care.",
  keywords: [
    "luxury dentist",
    "cosmetic dentistry",
    "smile design",
    "invisalign",
    "dental implants",
    "family dentist",
    "premium dental clinic"
  ],
  authors: [{ name: "Aura Dental Studio" }],
  openGraph: {
    title: "Aura Dental Studio | Premium Cosmetic & Family Dentistry",
    description: "Welcome to Aura Dental Studio, a sanctuary of calming luxury and advanced dental artistry.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-bg-light text-primary selection:bg-accent/20 selection:text-accent">
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
