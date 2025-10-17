import { Metadata } from "next";
import { Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "SD-WAN Solutions | Boom Networks",
  description:
    "Empower your enterprise with intelligent SD-WAN solutions — optimized routing, secure connectivity, and cloud-ready management.",
};

export default function SdwanPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Globe className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">SD-WAN Solutions</h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Simplify your enterprise network with Boom Networks’ SD-WAN. 
          Get centralized management, intelligent traffic routing, 
          and secure cloud connectivity for your distributed teams.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Dynamic path selection for optimal performance</li>
          <li>Zero-touch deployment & centralized orchestration</li>
          <li>End-to-end encryption and secure tunneling</li>
          <li>Cloud and on-premise integration</li>
        </ul>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#de6f23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c96320] transition"
          >
            Get a Demo
          </a>
        </div>
      </div>
    </main>
  );
}
