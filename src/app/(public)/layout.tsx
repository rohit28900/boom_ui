import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://boomnetwork.in"), 

  title: {
    default: "Boom Network | High-Speed Fiber Internet for Modern India",
    template: "%s | Boom Network",
  },

  description:
    "Affordable broadband plans with PAN India coverage. Experience high-speed fiber internet with Boom Network.",

  keywords: [
    "Boom Network",
    "ISP India",
    "ISP in Delhi NCR",
    "Broadband",
    "Fiber Internet",
    "High-Speed Internet",
    "Internet Service Provider",
  ],

  alternates: {
    canonical: "https://boomnetwork.in",
  },

  openGraph: {
    title: "Boom Network | High-Speed Fiber Internet",
    description:
      "Affordable broadband plans with PAN India coverage from Boom Network.",
    url: "https://boomnetwork.in",
    siteName: "Boom Network",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boom Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Boom Network | High-Speed Internet",
    description:
      "Affordable broadband plans with PAN India coverage from Boom Network.",
    images: ["/og-image.jpg"],
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="flex flex-col min-h-screen bg-white text-gray-900"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}