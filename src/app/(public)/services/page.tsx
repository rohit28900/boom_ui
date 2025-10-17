import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import ClientServices from "@/components/ClientServices";
import Link from "next/link";

export const metadata: Metadata = seoData.services;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative bg-white py-20 border-b border-gray-200">
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#de6f23] mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Reliable, scalable, and secure connectivity solutions for enterprises, government, and defense sectors.
          </p>
        </div>
      </section>

      {/* CLIENT SERVICES GRID */}
      <ClientServices />

      {/* CTA */}
      <section className="bg-[#de6f23] text-white py-20 text-center">
        <div className="max-w-[1500px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Connected?</h2>
          <p className="text-lg text-orange-50 mb-8">
            Talk to our team to explore the right connectivity solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#de6f23] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/plans"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#de6f23] transition"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
