import { Metadata } from "next";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "VoIP Cloud Telephony | Boom Networks",
  description:
    "Cloud-based telephony with IVR, call recording, analytics, and multi-channel support for modern businesses.",
};

export default function VoipPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Phone className="w-10 h-10 text-[#de6f23]" />
          <h1 className="text-3xl font-bold text-gray-900">
            VoIP Cloud Telephony
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Boom Networks’ VoIP Cloud Telephony enables organizations to handle
          voice communications efficiently through cloud infrastructure —
          providing scalability, analytics, and integration with your CRM or
          ERP.
        </p>

        <h2 className="text-2xl font-semibold text-[#de6f23] mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>IVR Systems for intelligent call routing</li>
          <li>Secure Call Recording & Archiving</li>
          <li>Real-time Analytics & Reporting</li>
          <li>Multi-channel Support (Voice, SMS, WhatsApp)</li>
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
