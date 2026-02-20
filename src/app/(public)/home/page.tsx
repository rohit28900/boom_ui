// src/app/home/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi, ShieldCheck, Headphones, Cloud, Router, Globe, Phone, Network,
  Lock, Server, ArrowRight, X, Sparkles, Zap, Wrench, MapPin, Globe2, Users
} from "lucide-react";

import HeroSlider from "@/components/HeroSlider";
import TestimonialCard from "@/components/TestimonialCard";
import OfferBanner from "@/components/OfferBanner";
import { seoData } from "@/lib/seo.config";
import ContactModal from "@/components/ContactModal";
import InfrastructureTrustSection from "@/components/InfrastructureTrustSection"

export const metadata: Metadata = seoData.home;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: "Boom Networks",
  description: "High-speed fiber internet provider",
  areaServed: "IN",
  serviceType: "Internet Service Provider",
};

export default function Home() {
  const showOffer = true;

  const offerConfig = {
    title: "Holi Special Offer!",
    description: "Get 50% OFF on installation",
    ctaText: "Claim Offer",
    ctaLink: "/plans?offer=Holi 2026",
    validUntil: "Valid until March 30, 2026",
    badge: "Limited Time",
  };

  const features = [
    { icon: Wifi, title: "Up to 1 Gbps Speed", description: "Lightning-fast fiber internet for seamless streaming, gaming, and remote work." },
    { icon: ShieldCheck, title: "99.9% Uptime SLA", description: "Enterprise-grade reliability backed by redundant fiber infrastructure." },
    { icon: Headphones, title: "24/7 Expert Support", description: "Round-the-clock technical assistance via phone, chat, and email." },
  ];

  const services = [
    { icon: Phone, title: "VoIP Cloud Telephony", description: "Cloud-based telephony with IVR, call recording, and analytics for seamless communication.", features: ["IVR Systems", "Call Recording", "Analytics", "Multi-channel Support"], href: "/services/voip" },
    { icon: Wifi, title: "Home Broadband & Enterprise Internet", description: "High-speed, reliable connectivity designed for homes and enterprises with guaranteed uptime.", features: ["99.9% Uptime", "Dedicated Bandwidth", "24/7 Support", "Scalable Plans"], href: "/services/internet" },
    { icon: Globe, title: "SD-WAN Solutions", description: "Intelligent network routing and optimization for enterprise-grade performance and security.", features: ["Centralized Control", "Cloud Ready", "Secure Routing", "Cost Optimization"], href: "/services/sdwan" },
    { icon: Network, title: "Internet Leased Lines", description: "Dedicated, symmetrical internet connections for mission-critical business applications.", features: ["Low Latency", "SLA Guaranteed", "Symmetrical Speed", "Enterprise Grade"], href: "/services/leased-lines" },
    { icon: Router, title: "Networking Solutions", description: "End-to-end network architecture, cabling, monitoring, and integrated security for enterprises.", features: ["LAN/WAN Setup", "Monitoring", "Integrated Security", "Custom Design"], href: "/services/networking" },
    { icon: Lock, title: "Government & Defense Connectivity", description: "Secure and compliant infrastructure tailored for government and defense network needs.", features: ["End-to-End Encryption", "Private Infrastructure", "24/7 Monitoring", "Compliance Ready"], href: "/services/government" },
  ];

  const testimonials = [
    { quote: "Switched from my old ISP and the difference is night and day! Super reliable connection.", author: "Priya Sharma", rating: 4 },
    { quote: "Perfect for my home office setup. Great speed and responsive support team!", author: "Rahul Mehta", rating: 5 },
    { quote: "Excellent coverage throughout my home. Smooth streaming and great value.", author: "Anjali Kumar", rating: 5 },
  ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {showOffer && <OfferBanner {...offerConfig} />}

      {/* ⚡ HERO SECTION */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6 w-full px-4">
          <Link
            href="/plans"
            className="group bg-[#de6f23] px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(222,111,35,0.3)] transition-all hover:scale-105 flex items-center gap-3"
          >
            View Plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <p className="text-[10px] font-bold text-white uppercase tracking-widest">
              Plans starting from <span className="text-[#de6f23]">₹499/month</span>
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 FEATURES SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#de6f23] mb-4">Core Network</h2>
          <h3 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-slate-900 mb-20 leading-[0.9]">
            Why Choose <br /> Boom Networks
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-[#de6f23] group-hover:text-white transition-all duration-500">
                  <f.icon strokeWidth={1.5} className="w-6 h-6 text-[#de6f23] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-black tracking-tight mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureTrustSection />

      {/* 🛠️ SERVICES SECTION */}
      <section className="py-32 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-[1000] tracking-tighter text-slate-900 leading-none">
              Our <span className="text-[#de6f23]">Services.</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="p-10 border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full group"
              >
                <s.icon className="w-10 h-10 mb-8 text-[#de6f23] group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-[#de6f23] transition-colors">{s.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">{s.description}</p>
                <div className="mt-auto">
                    <ul className="space-y-2 mb-8 border-t border-slate-50 pt-8">
                        {s.features.map((f, idx) => (
                            <li key={idx} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-[#de6f23]" /> {f}
                            </li>
                        ))}
                    </ul>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#de6f23] inline-flex items-center gap-2">
                        Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 NCR MISSION SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-slate-900 leading-[0.9] mb-8">
              Connecting India with <br /> <span className="text-[#de6f23]">Future-Ready</span> Fiber Internet
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              We are building a next-generation internet network designed for 
              homes, startups, gamers, and enterprises — 
              delivering fast, reliable, and affordable FTTH across India.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { icon: Wifi, t: "FTTH Network", d: "High-speed fiber to home & business" },
              { icon: Globe2, t: "Low-Latency Backbone", d: "Built for 4K streaming, gaming & WFH" },
              { icon: Users, t: "Local NOC Support", d: "Dedicated Delhi-NCR service engineers" },
              { icon: MapPin, t: "Expanding Across NCR", d: "Shahdara • Noida • Ghaziabad • Gurgaon" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group">
                <item.icon className="w-10 h-10 text-[#de6f23] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-black tracking-tight text-lg mb-2">{item.t}</h3>
                <p className="text-gray-500 text-xs font-medium leading-relaxed uppercase tracking-widest">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#de6f23]/10 blur-[100px]" />
             <h4 className="text-3xl font-[1000] text-white tracking-tighter mb-4">Want Fiber Connection?</h4>
             <p className="text-slate-400 mb-10 font-medium">Call our support team to check coverage in your area.</p>
             <a
               href="tel:+918588822022"
               className="inline-flex bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#de6f23]/20 hover:bg-[#c9621f] transition-all"
             >
               Call Now
             </a>
          </div>
        </div>
      </section>

      {/* 🗨️ TESTIMONIALS SECTION */}
      <section className="py-32 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#de6f23] mb-4">Voices</h2>
            <h3 className="text-4xl md:text-6xl font-[1000] tracking-tighter text-slate-900 leading-[0.9]">
              What Our <br /> Customers Say
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="hover:-translate-y-2 transition-transform duration-500">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactModal image="/form.png"/>
    </main>
  );
}