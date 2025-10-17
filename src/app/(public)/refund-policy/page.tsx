// src/app/(public)/refund-policy/page.tsx
export const metadata = {
  title: "Refund Policy | Velocity Signals",
  description: "Read Velocity Signals Pvt Ltd refund policy for internet services and plan cancellations.",
};

export default function RefundPolicyPage() {
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
        <h1 className="text-4xl font-bold mb-6 text-orange-600">Refund Policy</h1>

        <p className="mb-4 text-orange-900">
          <strong>Effective Date:</strong> 09 May 2025
        </p>
        <p className="mb-4 text-orange-900">
          <strong>Company Name:</strong> Velocity Signals Pvt Ltd
        </p>
        <p className="mb-6 text-orange-900">
          We strive to provide reliable and high-quality internet services to all our customers. This Refund Policy outlines the terms and conditions under which refunds may be issued for our internet services.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">1. General Policy</h2>
        <p className="mb-6 text-orange-800">
          All payments made towards our internet services are generally non-refundable, except in specific cases as outlined below. By subscribing to our services, you agree to this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">2. Eligible Refund Scenarios</h2>
        <p className="mb-3 text-orange-800">Refunds may be considered under the following circumstances:</p>

        <ol className="list-decimal ml-6 mb-6 space-y-2 text-orange-900">
          <li>
            <strong>Service Not Activated:</strong> If the service is not activated within the promised installation timeline due to our fault, you may request a full refund of any amount paid in advance.
          </li>
          <li>
            <strong>Service Disruption (No Connectivity):</strong> If you experience a continuous total service outage for more than 72 hours due to a fault on our end, and our technical team is unable to resolve the issue, a pro-rata refund or service credit may be issued for the downtime period.
          </li>
          <li>
            <strong>Duplicate Payments:</strong> If a customer accidentally makes a duplicate payment, we will refund the extra amount upon verification.
          </li>
          <li>
            <strong>Prepaid Plan Cancellations (Before Activation):</strong> If a prepaid plan is canceled before activation, a refund may be issued after deducting administrative or installation charges, if any.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">3. Non-Refundable Scenarios</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2 text-orange-900">
          <li>Customer requests cancellation after service has been activated and used.</li>
          <li>Service disruptions due to factors beyond our control (e.g., power outages, customer equipment issues).</li>
          <li>Violation of terms of service or fair usage policy by the customer.</li>
          <li>Installation or setup fees once the service has been provisioned.</li>
          <li>Promotional or discounted plans clearly marked as “non-refundable.”</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">4. Refund Process</h2>
        <p className="mb-3 text-orange-800">
          To request a refund, please contact our support team with your:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-orange-900">
          <li>Registered account name</li>
          <li>Customer ID</li>
          <li>Payment details</li>
          <li>Reason for refund request</li>
        </ul>
        <p className="mb-3 text-orange-800">
          <strong>Contact Email:</strong> support@velocitysignals.com
        </p>
        <p className="mb-6 text-orange-800">
          <strong>Phone:</strong> 9899499011
        </p>
        <p className="mb-6 text-orange-900">
          Refunds, if approved, will be processed within 7–10 business days via the original mode of payment or as a service credit, as applicable.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-700">5. Changes to This Policy</h2>
        <p className="mb-6 text-orange-800">
          We reserve the right to modify or update this Refund Policy at any time. Changes will be communicated via our website or customer portal.
        </p>
      </div>
    </div>
  );
}
