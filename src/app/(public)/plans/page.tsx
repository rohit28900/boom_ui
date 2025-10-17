import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import PlanCardWrapper from "@/components/PlanCardWrapper";
import  { Plan } from "@/components/PlanCard";

export const metadata: Metadata = seoData.plans;

// Server-side fetch
async function getPlans(): Promise<Plan[]> {
  const res = await fetch("http://localhost:8000/plans/plans/", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch plans");
  return res.json();
}

export default async function PlansPage() {
  let plans: Plan[] = [];

  try {
    plans = await getPlans();
  } catch (err) {
    console.error(err);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-semibold">Failed to load plans.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Choose Your Perfect Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lightning-fast internet plans designed for every need. Get started with unlimited data and free installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <PlanCardWrapper key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </main>
  );
}
