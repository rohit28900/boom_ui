import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import PlanCardWrapper from "@/components/PlanCardWrapper";
import { Plan } from "@/components/PlanCard";
import { get } from "@/lib/api";

export const metadata: Metadata = seoData.plans;

// ✅ Dummy Plans matching your Plan interface
const dummyPlans: Plan[] = [
  {
    id: 1,
    name: "Basic Plan",
    speed: "50 Mbps",
    price: 499,
    popular: false,
    ott: false,
    liveTv: false,
    features: [
      "Unlimited Data",
      "Free Router Installation",
      "24/7 Customer Support",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    speed: "100 Mbps",
    price: 799,
    popular: true,
    ott: true,
    liveTv: false,
    features: [
      "Unlimited Data",
      "Wi-Fi Router Included",
      "Priority Support",
      "OTT Access (Disney+, Prime Video)",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    speed: "200 Mbps",
    price: 1199,
    popular: false,
    ott: true,
    liveTv: true,
    features: [
      "Truly Unlimited Data",
      "Free Router Upgrade",
      "Live TV Channels Access",
      "Dedicated Support Line",
    ],
  },
];

// ✅ Server-side fetch with fallback
async function getPlans(): Promise<Plan[]> {
  try {
    const plans = await get("/plans/plans/");
    return plans;
  } catch (err: any) {
    return dummyPlans;
  }
}

export default async function PlansPage() {
  const plans = await getPlans();
  const usingDummy = plans === dummyPlans;

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
          animation:
            "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "1s",
        }}
      ></div>

      {/* 🟧 Page Header */}
      <header className="relative pt-24 pb-12 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Choose Your Perfect Plan
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Lightning-fast internet plans designed for every need.
          Get started with unlimited data and free installation.
        </p>

        {usingDummy && (
          <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-md">
            Showing demo plans (API not connected)
          </div>
        )}
      </header>

      {/* 🧩 Plans Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCardWrapper key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </main>
  );
}
