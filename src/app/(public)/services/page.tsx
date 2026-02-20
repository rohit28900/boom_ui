import { seoData } from "@/lib/seo.config";
import type { Metadata } from "next";
import ClientServices from "@/components/ClientServices";
import Link from "next/link";
import { ArrowRight, Activity, Network, ShieldCheck } from "lucide-react";

export const metadata: Metadata = seoData.services;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      {/* 🟧 Sophisticated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#de6f23]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-amber-100/20 rounded-full blur-[120px]" />
      </div>

      {/* 🏗️ HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-gray-100 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#de6f23] font-bold tracking-[0.2em] text-xs uppercase mb-4">
              <span className="w-10 h-[1px] bg-[#de6f23]"></span>
              Service Portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none mb-6">
              Full Stack <br />
              <span className="text-[#de6f23]">Connectivity.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              From mission-critical defense circuits to ultra-fast home fiber, 
              we engineer the infrastructure that keeps the world moving.
            </p>
          </div>
          
          {/* Quick Trust Badges */}
          <div className="hidden lg:flex flex-col gap-4 text-right">
             <div className="flex items-center justify-end gap-3 text-gray-400 font-medium">
                <span className="text-sm">Low Latency Routing</span>
                <Activity className="w-5 h-5 text-[#de6f23]" />
             </div>
             <div className="flex items-center justify-end gap-3 text-gray-400 font-medium">
                <span className="text-sm">Military Grade Security</span>
                <ShieldCheck className="w-5 h-5 text-[#de6f23]" />
             </div>
             <div className="flex items-center justify-end gap-3 text-gray-400 font-medium">
                <span className="text-sm">Global Peering</span>
                <Network className="w-5 h-5 text-[#de6f23]" />
             </div>
          </div>
        </div>
      </section>

      {/* 📦 CLIENT SERVICES GRID */}
      {/* Note: Ensure ClientServices component internally uses the modern card styles we discussed */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <ClientServices />
        </div>
      </section>

      {/* 🚀 HIGH-IMPACT CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-gray-900 rounded-[3rem] p-8 md:p-20 overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#de6f23] translate-x-1/2 skew-x-[-20deg] opacity-10 transition-transform duration-1000 group-hover:translate-x-1/3" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Ready to upgrade your <br />
                <span className="text-[#de6f23]">Digital Backbone?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                Talk to our network architects today for a custom consultation 
                tailored to your organizational throughput requirements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group bg-[#de6f23] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#c96320] transition-all flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/plans"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  Browse All Plans
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "SLA Guarantee", val: "99.99%" },
                    { label: "Deployment", val: "Rapid" },
                    { label: "Support", val: "24/7/365" },
                    { label: "Security", val: "End-to-End" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="text-[#de6f23] font-black text-2xl">{stat.val}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌐 BOTTOM DECORATION */}
      <div className="max-w-7xl mx-auto px-6 pb-12 flex justify-between items-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
        <span>Ethernet</span>
        <span className="text-[#de6f23]">•</span>
        <span>Fiber</span>
        <span className="text-[#de6f23]">•</span>
        <span>Wireless</span>
        <span className="text-[#de6f23]">•</span>
        <span>Satellite</span>
      </div>
    </main>
  );
}