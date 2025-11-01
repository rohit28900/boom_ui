import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css"; // you can uncomment this if it's in src/app/globals.css

export const metadata: Metadata = {
  title: "Boom Networks - High-Speed Internet",
  description: "Affordable broadband plans with PAN India coverage.",
  keywords: ["ISP", "Broadband", "Internet", "High-Speed", "Cyber Security"],
  openGraph: {
    title: "Boom Networks - High-Speed Internet",
    description: "Affordable broadband plans with PAN India coverage.",
    url: "https://boomnetworks.in",
    siteName: "Boom Networks",
    images: [
      {
        url: "/boom_w.png", // add your OG image in /public/
        width: 1200,
        height: 630,
        alt: "Boom Networks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boom Networks - High-Speed Internet",
    description: "Affordable broadband plans with PAN India coverage.",
    images: ["/og-image.jpg"],
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Navbar and Footer are client components */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
