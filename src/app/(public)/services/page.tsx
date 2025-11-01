import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import ClientServices from "@/components/ClientServices";
import Link from "next/link";

export const metadata: Metadata = seoData.services;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* 🟧 Background Blur Effects */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: "rgba(222, 111, 35, 0.1)" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(222, 111, 35, 0.1)",
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "1s",
        }}
      ></div>

      {/* HERO */}
      <section className="relative py-24 text-center max-w-[1500px] mx-auto px-6">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Reliable, scalable, and secure connectivity solutions for enterprises, government, and defense sectors.
        </p>
      </section>

      {/* CLIENT SERVICES GRID */}
      <section className="relative z-10">
        <ClientServices />
      </section>

      {/* CTA */}
      <section className="relative bg-[#de6f23] text-white py-20 text-center mt-20 overflow-hidden">
        {/* Light orange background blur for depth */}
        <div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "#ffffff33" }}
        ></div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Connected?</h2>
          <p className="text-lg text-orange-50 mb-8">
            Talk to our team to explore the right connectivity solution for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#de6f23] px-10 py-4 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/plans"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#de6f23] transition"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
