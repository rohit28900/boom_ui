import { Metadata } from "next";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Internet Leased Lines | Boom Networks",
  description:
    "Dedicated, symmetrical, and high-speed leased line connectivity for mission-critical enterprise operations.",
};

export default function LeasedLinesPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Network className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">
            Internet Leased Lines
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Enjoy guaranteed speed and reliability with our dedicated leased 
          line solutions — ideal for businesses that need constant, high-volume 
          connectivity for operations, cloud, or communication.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Dedicated and uncontended bandwidth</li>
          <li>Symmetrical upload/download speeds</li>
          <li>Enterprise-grade uptime SLA</li>
          <li>Direct routing to major cloud providers</li>
        </ul>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#de6f23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c96320] transition"
          >
            Get Quote
          </a>
        </div>
      </div>
    </main>
  );
}
