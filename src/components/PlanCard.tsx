'use client';

import React from 'react';
import { Phone, Tv, Router } from 'lucide-react';

export interface Plan {
  id: number;
  name: string;
  tier?: 'Silver' | 'Gold' | 'Platinum' | null;
  speed: string;
  price1: string;
  price3: string;
  price6: string;
  price12: string;
  ottLogos: string[]; 
}

export function PlanCard({ plan, onGetStarted }: { plan: Plan; onGetStarted: (id: number) => void }) {
  
  const getTierBadgeStyles = (tier: string | undefined | null) => {
    switch (tier) {
      case 'Silver': return 'bg-slate-400 text-white';
      case 'Gold': return 'bg-yellow-400 text-black';
      case 'Platinum': return 'bg-slate-900 text-slate-100 border border-slate-700';
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-[310px] bg-white rounded-[2rem] shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 relative group">
      
      {/* Tier Tag */}
      {plan.tier && (
        <div className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl font-black text-[9px] uppercase tracking-widest ${getTierBadgeStyles(plan.tier)}`}>
          {plan.tier}
        </div>
      )}

      {/* Header Tab - Using #de6f23 */}
      <div className="flex justify-start">
        <div 
          className="text-white px-8 py-2 rounded-br-2xl font-black text-[10px] tracking-widest uppercase shadow-sm"
          style={{ backgroundColor: '#de6f23' }}
        >
          {plan.name}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        
        {/* Speed Section */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-6xl font-[950] text-gray-900 leading-none tracking-tighter">
            {plan.speed}
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-black text-gray-900 leading-none uppercase">MBPS</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter italic mt-1">Fiber Link</span>
          </div>
        </div>

        {/* Pricing Rows - Using #de6f23 borders/bg */}
        <div className="w-full space-y-2 mb-6">
          <PriceRow label="1 Month" price={plan.price1} />
          <PriceRow label="3 Months" price={plan.price3} />
          <PriceRow label="6 Months" price={plan.price6} />
          <PriceRow label="12 Months" price={plan.price12} />
        </div>

        {/* Features */}
        <div className="w-full space-y-3 mb-5 border-t border-gray-100 pt-5">
          <div className="flex items-center gap-3">
            <Router size={16} style={{ color: '#de6f23' }} className="shrink-0" />
            <span className="font-bold text-[11px] text-zinc-700">Dual-Band 5G Router Included</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} style={{ color: '#de6f23' }} className="shrink-0" />
            <span className="font-bold text-[11px] text-zinc-700">Unlimited Voice (Landline)</span>
          </div>
          <div className="flex items-center gap-3">
            <Tv size={16} style={{ color: '#de6f23' }} className="shrink-0" />
            <span className="font-bold text-[11px] text-zinc-700">300+ LIVE TV Channels</span>
          </div>
        </div>

        {/* OTT Logos */}
        <div className="mb-6">
           <p className="text-[9px] font-black text-gray-400 uppercase mb-2 tracking-widest">Included Apps</p>
           <div className="flex flex-wrap items-center gap-2">
            {plan.ottLogos.map((logo, idx) => (
                <div key={idx} className="w-8 h-8 rounded-lg border border-gray-100 bg-white overflow-hidden shadow-sm flex items-center justify-center p-1 hover:border-[#de6f23] transition-colors">
                  <img src={logo} alt="ott icon" className="w-full h-full object-contain" />
                </div>
            ))}
            <div className="w-8 h-8 rounded-lg border border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                <span className="text-[8px] font-black text-gray-400">+MORE</span>
            </div>
          </div>
        </div>

        {/* Action Button - BLACK */}
        <div className="mt-auto">
          <p style={{ color: '#de6f23' }} className="text-[9px] font-black mb-3 text-center uppercase tracking-tighter">
            Rates Inclusive of GST
          </p>
          <button 
            onClick={() => onGetStarted(plan.id)}
            className="w-full bg-black hover:bg-zinc-800 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-[0.97] shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function PriceRow({ label, price }: { label: string; price: string }) {
    return (
      <div 
        className="flex border rounded-xl overflow-hidden h-10 shadow-sm"
        style={{ borderColor: '#de6f23' }}
      >
        <div 
          className="text-white w-[40%] flex items-center justify-center font-bold text-[9px] uppercase tracking-tighter shrink-0"
          style={{ backgroundColor: '#de6f23' }}
        >
            {label}
        </div>
        <div className="bg-white text-black w-[60%] flex items-center justify-center font-black text-lg">
            ₹{price}
        </div>
      </div>
    );
}