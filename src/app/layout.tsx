import type { Metadata } from "next";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import { seoData } from "@/lib/seo.config";
import "./globals.css"; // ensure correct path

export const metadata: Metadata = seoData.publicLayout;

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
