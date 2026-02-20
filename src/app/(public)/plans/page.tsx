"use client";

import PlanCardWrapper from "@/components/PlanCardWrapper";
import { Plan } from "@/components/PlanCard";
import { motion } from "framer-motion";
import { Zap, ChevronDown } from "lucide-react";

const dummyPlans: Plan[] = [
  {
    id: 1,
    name: "100MBPS",
    tier: null,
    speed: "100",
    price1: "589",
    price3: "1766",
    price6: "3357",
    price12: "6360",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Ullu_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png"
    ]
  },
  {
    id: 2,
    name: "150MBPS",
    tier: null,
    speed: "150",
    price1: "707",
    price3: "2120",
    price6: "4030",
    price12: "7635",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Ullu_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 3,
    name: "200MBPS",
    tier: null,
    speed: "200",
    price1: "943",
    price3: "2828",
    price6: "5374",
    price12: "10182",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png"
    ]
  },
  {
    id: 4,
    name: "200MBPS",
    tier: "Silver",
    speed: "200",
    price1: "1061",
    price3: "3182",
    price6: "6082",
    price12: "11598",
    ottLogos: [
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 5,
    name: "300MBPS",
    tier: null,
    speed: "300",
    price1: "1179",
    price3: "3536",
    price6: "6719",
    price12: "12732",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png"
    ]
  },
  {
    id: 6,
    name: "300MBPS",
    tier: "Gold",
    speed: "300",
    price1: "1238",
    price3: "3713",
    price6: "6896",
    price12: "13794",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 7,
    name: "500MBPS",
    tier: "Platinum",
    speed: "500",
    price1: "1887",
    price3: "5660",
    price6: "10790",
    price12: "19694",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Amazon_Prime_logo_%282022%29.svg",
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png",
    ]
  }
];

export default function PlansPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6 overflow-hidden relative">
      {/* 🌐 Subtle Background Infrastructure Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-[#de6f23] text-[10px] font-black uppercase tracking-[0.3em] mb-10"
          >
            <Zap size={12} className="fill-[#de6f23]" />
            High-Performance Fiber-To-The-Home
          </motion.div>
          
          {/* ⚡ SINGLE LINE DYNAMIC HEADING */}
          <h1 className="w-full text-center whitespace-nowrap text-[8.5vw] lg:text-[7.5rem] font-[1000] text-slate-900 tracking-[-0.06em] leading-none uppercase italic">
            Pick Your <span className="text-[#de6f23]">Plan.</span>
          </h1>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <p className="max-w-xl text-center text-slate-500 font-medium leading-relaxed text-sm md:text-base">
              Precision-engineered fiber connectivity. Select a dedicated bandwidth 
              tier to view premium entertainment bundles and enterprise SLAs.
            </p>
            <div className="animate-bounce pt-4">
               <ChevronDown className="text-slate-300" />
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 items-stretch">
          {dummyPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <PlanCardWrapper plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Footnote / Technical Metadata */}
        <div className="mt-40 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* <div className="flex items-center gap-4 group">
               <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
               <p className="text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">
                   System Status: Nominal / All Nodes Active
               </p>
            </div> */}
            
            <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">
                    * All rates inclusive of 18% GST • No Hidden Surcharges
                </p>
                <div className="flex gap-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="h-1 w-8 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#de6f23]" 
                          animate={{ x: [-32, 32] }} 
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                        />
                     </div>
                   ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}