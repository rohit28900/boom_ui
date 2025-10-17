// src/app/(public)/privacy-policy/page.tsx
export const metadata = {
  title: "Privacy Policy | Velocity Signals",
  description: "Read Velocity Signals Pvt Ltd privacy policy for internet service users.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">Privacy Policy</h1>

        <p className="mb-4 text-orange-800">
          <strong>Effective Date:</strong> 09 May 2025
        </p>
        <p className="mb-4 text-orange-800">
          <strong>Company Name:</strong> Velocity Signals Pvt Ltd
        </p>
        <p className="mb-4 text-orange-800">
          <strong>Service:</strong> Internet Service Provision
        </p>
        <p className="mb-6 text-orange-900">
          At Velocity Signals Pvt Ltd, we value your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our internet services.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-orange-900">
          <li><strong>Personal Information:</strong> Name, address, contact number, email, government-issued ID (as per regulatory requirements).</li>
          <li><strong>Service Usage Data:</strong> IP addresses, browsing history, bandwidth usage, device information, connection logs, and network diagnostics.</li>
          <li><strong>Billing Information:</strong> Payment method, transaction history, billing address.</li>
          <li><strong>Technical Information:</strong> Cookies, device identifiers, and other technical data to improve service performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-orange-900">
          <li>Provide and manage your internet services.</li>
          <li>Monitor network performance and improve quality.</li>
          <li>Comply with legal and regulatory obligations.</li>
          <li>Detect and prevent fraud, misuse, or illegal activities.</li>
          <li>Communicate important updates, outages, or promotions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">3. Information Sharing and Disclosure</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-orange-900">
          <li>With law enforcement or government agencies when required by law.</li>
          <li>With third-party service providers who assist in service delivery (e.g., billing, technical support).</li>
          <li>With regulatory authorities as required under local telecom regulations.</li>
        </ul>
        <p className="mb-6 text-orange-800">
          All third parties are bound by confidentiality agreements and data protection laws.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">4. Data Security</h2>
        <p className="mb-6 text-orange-800">
          We implement strict security measures, including encryption, access controls, and regular audits, to safeguard your data from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">5. Data Retention</h2>
        <p className="mb-6 text-orange-800">
          We retain your personal and usage data only as long as necessary to fulfill the purposes described in this policy or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">6. Your Rights</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-orange-900">
          <li>Access or correct your personal information.</li>
          <li>Request deletion of your data, subject to regulatory obligations.</li>
          <li>Withdraw consent (where applicable).</li>
        </ul>
        <p className="mb-6 text-orange-800">
          To exercise your rights, please contact us at: <strong>support@velocitysignals.com</strong> or call <strong>9899499011</strong>.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">7. Changes to This Policy</h2>
        <p className="mb-6 text-orange-800">
          We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through our website.
        </p>
      </div>
    </div>
  );
}
