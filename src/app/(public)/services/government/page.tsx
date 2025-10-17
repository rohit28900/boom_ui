import { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Government & Defense Connectivity | Boom Networks",
  description:
    "Secure, encrypted, and compliant connectivity infrastructure for government and defense operations.",
};

export default function GovernmentPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Lock className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">
            Government & Defense Connectivity
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Boom Networks provides mission-critical connectivity designed for 
          government agencies and defense institutions — prioritizing security, 
          compliance, and uninterrupted operations.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>End-to-end encryption and VPN tunneling</li>
          <li>Private dedicated networks (PDN)</li>
          <li>Compliance with government-grade standards</li>
          <li>24/7 monitoring and on-site response teams</li>
        </ul>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#de6f23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c96320] transition"
          >
            Contact Our Enterprise Team
          </a>
        </div>
      </div>
    </main>
  );
}
