import { Metadata } from "next";
import { Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Broadband & Enterprise Internet | Boom Networks",
  description:
    "Reliable high-speed broadband and enterprise-grade internet solutions with 99.9% uptime and robust connectivity.",
};

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Wifi className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">
            Home Broadband & Enterprise Internet
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Experience ultra-fast, low-latency internet with Boom Networks — 
          designed for both homes and enterprises. Enjoy dedicated bandwidth, 
          superior uptime, and end-to-end support.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>99.9% network uptime SLA</li>
          <li>Symmetrical upload and download speeds</li>
          <li>24/7 monitoring and technical support</li>
          <li>Flexible business and home plans</li>
        </ul>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#de6f23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c96320] transition"
          >
            Request a Connection
          </a>
        </div>
      </div>
    </main>
  );
}
