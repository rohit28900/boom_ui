import { Metadata } from "next";
import { Router } from "lucide-react";

export const metadata: Metadata = {
  title: "Networking Solutions | Boom Networks",
  description:
    "End-to-end LAN/WAN setup, WiFi deployment, monitoring, and enterprise network security services.",
};

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Router className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">
            Networking Solutions
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Boom Networks delivers custom LAN/WAN architecture, structured cabling, 
          and network optimization services to power your digital operations.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>LAN/WAN architecture and deployment</li>
          <li>Wireless network design and optimization</li>
          <li>Firewall and security integration</li>
          <li>Managed network monitoring services</li>
        </ul>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#de6f23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c96320] transition"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
