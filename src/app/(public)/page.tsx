// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import { Zap, Shield, Headphones, Wifi, Building2, Users } from "lucide-react";

// ✅ Metadata for SEO
export const metadata = {
  title: "Boom Networks - High-Speed Internet & Broadband Plans",
  description:
    "Experience lightning-fast broadband with Boom Networks. Affordable plans, reliable connectivity, and PAN India coverage for homes and businesses.",
  keywords: [
    "Boom Networks",
    "broadband plans",
    "fiber internet",
    "ISP India",
    "WiFi connection",
    "high-speed internet",
    "cyber security solutions",
  ],
  openGraph: {
    title: "Boom Networks - High-Speed Internet & Broadband Plans",
    description:
      "Affordable, reliable, and fast internet for homes and businesses. Connect with Boom Networks today!",
    url: "https://boomnetworks.in",
    siteName: "Boom Networks",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Boom Networks Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default async function HomePage() {
  // ✅ Fetch plans (SSR)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans`, {
    cache: "no-store", // always fresh data
  });
  const plans = res.ok ? await res.json() : [];

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* ✅ Navbar */}
        {/* <Navbar /> */}

        <main className="flex-1 bg-white">
          {/* Hero Section */}
          <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
            style={{ backgroundImage: "url('/banner.jpeg')" }}>
            <div className="bg-black/40 absolute inset-0"></div>
            <div className="relative z-10 max-w-3xl px-6">
              <h1 className="text-5xl font-bold mb-4">Lightning-Fast Internet for Everyone</h1>
              <p className="text-lg mb-6">
                Choose from affordable broadband plans with 24/7 support and PAN India coverage.
              </p>
              <a
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Contact Us
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-semibold mb-10 text-gray-800">Why Choose Boom Networks?</h2>
            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
              <FeatureCard
                icon={<Zap className="text-orange-500 w-10 h-10" />}
                title="Ultra-Fast Speed"
                description="Enjoy blazing fast internet speeds ideal for work, streaming, and gaming."
              />
              <FeatureCard
                icon={<Shield className="text-orange-500 w-10 h-10" />}
                title="Secure Network"
                description="Your data stays protected with our advanced cyber security solutions."
              />
              <FeatureCard
                icon={<Headphones className="text-orange-500 w-10 h-10" />}
                title="24/7 Customer Support"
                description="Round-the-clock assistance whenever you need help."
              />
            </div>
          </section>

          {/* Plans Section */}
          <section className="py-20 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-10 text-gray-800">Our Internet Plans</h2>
            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
              {plans.length > 0 ? (
                plans.map((plan: any) => (
                  <div key={plan.id} className="border rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <p className="text-xl font-semibold text-gray-900 mb-4">
                      ₹{plan.price} / month
                    </p>
                    <ul className="text-sm text-gray-700 mb-6 space-y-1">
                      <li>Speed: {plan.speed} Mbps</li>
                      <li>Type: {plan.type}</li>
                      {plan.ott && <li>OTT Access: ✅</li>}
                      {plan.livetv && <li>Live TV: ✅</li>}
                    </ul>
                    <a
                      href="/contact"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full"
                    >
                      Contact Us
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No plans available at the moment.</p>
              )}
            </div>
          </section>

          {/* Business Solutions Section */}
          <section className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-semibold mb-10 text-gray-800">Business & Enterprise Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
              <FeatureCard
                icon={<Building2 className="text-orange-500 w-10 h-10" />}
                title="Corporate Internet"
                description="High-speed, reliable connections tailored for your business needs."
              />
              <FeatureCard
                icon={<Wifi className="text-orange-500 w-10 h-10" />}
                title="Managed Wi-Fi"
                description="Custom Wi-Fi solutions with full network management."
              />
              <FeatureCard
                icon={<Users className="text-orange-500 w-10 h-10" />}
                title="Dedicated Support"
                description="Priority technical support for enterprise clients."
              />
            </div>
          </section>
        </main>

        {/* ✅ Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

// ✅ Reusable feature card component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
