'use client';

import {
  Users,
  Award,
  Target,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Rocket,
  ArrowUpRight,
  Fingerprint,
  HeartHandshake,
  Globe2
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Rocket, title: "Innovation First", description: "Architecting the next generation of fiber infrastructure using AI-driven network optimization." },
    { icon: Shield, title: "Secure & Reliable", description: "Hardened enterprise-grade security protocols integrated into every node of our network." },
    { icon: HeartHandshake, title: "Customer-Focused", description: "Bypassing scripts for real humans. Our support engineers are part of the local community." },
    { icon: TrendingUp, title: "Scaling Fast", description: "Aggressively expanding our fiber footprint to bridge the digital divide in record time." }
  ];

  const stats = [
    { number: "2024", label: "Est. Inception" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "10Gbps", label: "Core Capacity" },
    { number: "24/7", label: "NOC Coverage" }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🟧 Sophisticated Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-10 right-0 w-72 h-72 bg-[#de6f23]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-[#de6f23]" />
                Powering the Digital Economy
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9]">
              Connecting <br />
              <span className="text-[#de6f23]">The Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              Boom Networks is more than an ISP. We are the architects of the 
              uninterrupted digital experiences that drive modern life.
            </p>
          </div>
        </div>
      </section>

      {/* 📊 Modern Stats - Bento Style */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-[#de6f23] transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-4">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧡 Our Story - High Contrast */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-[#de6f23]/10 text-[#de6f23] text-xs font-bold rounded uppercase">Origin Story</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Challenging the <span className="italic font-serif">Status Quo</span> of Connectivity.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                Founded in 2024, Boom Networks was born out of frustration with legacy infrastructure. We saw communities struggling with 20th-century tech in a 21st-century world.
                </p>
                <p className="font-medium text-gray-900">
                Our mission was clear: Build a network that is as fast, flexible, and transparent as the cloud services it connects to.
                </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
               <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Leadership Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#de6f23]/80 via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px]">
                <Fingerprint className="w-10 h-10 text-[#de6f23] mb-4" />
                <p className="text-sm font-bold text-gray-900 uppercase tracking-tighter">Bespoke Infrastructure for every client</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 Value Propositions - Modern Cards */}
      <section className="bg-gray-900 py-32 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">The Core Principles Driving Our Growth</h2>
            <p className="text-gray-400 max-w-xs text-sm uppercase tracking-widest font-semibold">What sets us apart from legacy ISPs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group flex flex-col h-full border-t border-white/10 pt-8 hover:border-[#de6f23] transition-colors">
                <v.icon className="w-10 h-10 text-[#de6f23] mb-8" />
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Abstract vector in background */}
        <Globe2 className="absolute -right-20 -bottom-20 w-[500px] h-[500px] text-white/5" />
      </section>

      {/* 🎯 Impact Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <Target className="w-16 h-16 mx-auto text-[#de6f23] mb-10" />
        <h2 className="text-5xl font-black text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Ensuring that speed is a <span className="underline decoration-[#de6f23] decoration-8 underline-offset-[12px]">right</span>, not a privilege.
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mt-16">
            <div className="flex items-center gap-4 text-left bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100">
                <Users className="w-8 h-8 text-[#de6f23]" />
                <div>
                    <h4 className="font-bold">Home Users</h4>
                    <p className="text-sm text-gray-500">Unlocking 4K/8K living</p>
                </div>
            </div>
            <div className="flex items-center gap-4 text-left bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100">
                <Award className="w-8 h-8 text-[#de6f23]" />
                <div>
                    <h4 className="font-bold">Enterprises</h4>
                    <p className="text-sm text-gray-500">Mission-critical uptime</p>
                </div>
            </div>
        </div>
      </section>

      {/* 🚀 CTA - Clean & Bold */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-[#de6f23] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready for better?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Join the Network
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="/plans"
                className="bg-black/20 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black hover:bg-black/40 transition-all"
              >
                View Plans
              </a>
            </div>
          </div>
          {/* Animated rings for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>
      </section>
    </main>
  );
}