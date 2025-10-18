import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import PlanCardWrapper from "@/components/PlanCardWrapper";
import { Plan } from "@/components/PlanCard";
import { get } from "@/lib/api"; // <-- import your api.js GET

export const metadata: Metadata = seoData.plans;

// Server-side fetch using api.js
async function getPlans(): Promise<Plan[]> {
  try {
    const plans = await get("/plans/plans/"); // relative URL
    return plans;
  } catch (err) {
    console.error("Failed to fetch plans:", err);
    throw err;
  }
}

export default async function PlansPage() {
  let plans: Plan[] = [];

  try {
    plans = await getPlans();
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load plans.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Choose Your Perfect Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lightning-fast internet plans designed for every need. Get started
            with unlimited data and free installation.
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
