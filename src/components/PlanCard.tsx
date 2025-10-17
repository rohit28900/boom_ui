'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface Plan {
  id: number;
  name: string;
  speed: string;
  price: number;
  popular?: boolean;
  ott?: boolean;
  liveTv?: boolean;
  features: string;
}

interface PlanCardProps {
  plan: Plan;
  onGetStarted: (planId: number) => void;
}

export default function PlanCard({ plan, onGetStarted }: PlanCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition">
      {plan.popular && (
        <span className="bg-[#de6f23] text-white px-3 py-1 rounded-full text-xs font-semibold self-start mb-2">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.speed}</p>
      <p className="text-gray-900 font-semibold text-xl mb-4">₹{plan.price}/month</p>
      {plan.ott && <p className="text-sm text-gray-500 mb-2">Includes OTT bundle</p>}
      {plan.liveTv && <p className="text-sm text-gray-500 mb-4">Live TV included</p>}
      <p className="text-gray-600 text-sm mb-6">{plan.features}</p>
      <button
        onClick={() => onGetStarted(plan.id)}
        className="mt-auto bg-[#de6f23] text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition"
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
