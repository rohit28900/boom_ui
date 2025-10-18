'use client';
import PlanCard, { Plan } from "./PlanCard"; // relative import
import { useRouter } from "next/navigation";

interface PlanCardWrapperProps {
  plan: Plan;
}

export default function PlanCardWrapper({ plan }: PlanCardWrapperProps) {
  const router = useRouter();

  const handleGetStarted = (planId: number) => {
    // router.push(`/checkout?plan=${planId}`);
    router.push(`/contact?plan=${encodeURIComponent(plan.name)}`);
  };

  return <PlanCard plan={plan} onGetStarted={handleGetStarted} />;
}
