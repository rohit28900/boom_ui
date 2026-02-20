import { Metadata } from "next";
import { 
  Network, Zap, Activity, Cloud, ArrowRight, 
  CheckCircle2, HardDrive, BarChart3, ShieldCheck, 
  Settings2, Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internet Leased Lines | Boom Networks",
  description:
    "Dedicated, symmetrical, and high-speed leased line connectivity for mission-critical enterprise operations.",
};

const performanceStats = [
  { label: "Uptime SLA", value: "99.99%", desc: "Industry Leading" },
  { label: "Contention", value: "1:1", desc: "Pure Dedicated" },
  { label: "Latency", value: "<10ms", desc: "Low Jitter" },
];

const capabilities = [
  {
    title: "1:1 Dedicated Bandwidth",
    description: "Uncontended fiber access. Your bandwidth is yours alone—no slowing down during peak hours.",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-orange-50 text-[#de6f23]"
  },
  {
    title: "Symmetrical Speeds",
    description: "Upload as fast as you download. Perfect for cloud backups, VOIP, and seamless video conferencing.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Cloud Direct Connect",
    description: "Low-latency peering with AWS, Azure, and Google Cloud for faster application performance.",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Proactive Monitoring",
    description: "Managed router services with 24/7 monitoring and automated failover capabilities.",
    icon: <Network className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
];

export default function LeasedLinesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🏗️ ENTERPRISE HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.25em] mb-10 shadow-2xl">
              <HardDrive className="w-3 h-3 text-[#de6f23]" />
              <span>Carrier-Grade Fiber Architecture</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-[1000] text-gray-900 tracking-tighter leading-[0.85] mb-10">
              Dedicated <br />
              <span className="text-[#de6f23]">Leased Lines.</span>
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl font-medium">
              Mission-critical connectivity with 1:1 contention. We provide the raw power 
              required to run global enterprises, data centers, and high-frequency operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-20">
              <a href="/contact" className="flex items-center justify-center gap-3 bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#c96320] transition-all hover:scale-105 shadow-2xl shadow-[#de6f23]/30 active:scale-95">
                Engineer a Solution
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#specs" className="flex items-center justify-center gap-3 bg-white text-gray-900 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all border border-gray-200">
                View SLA Terms
              </a>
            </div>

            {/* 📈 PERFORMANCE DASHBOARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-inner">
              {performanceStats.map((stat, i) => (
                <div key={i} className="bg-white py-10 rounded-[2.5rem] shadow-sm flex flex-col items-center border border-gray-50">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-3">{stat.label}</span>
                  <span className="text-5xl font-[1000] text-gray-900 tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-bold text-[#de6f23] mt-2 uppercase">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Network Pattern */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </section>

      {/* 💎 CAPABILITIES BENTO */}
      <section id="specs" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Enterprise Orchestration</h2>
            <p className="text-gray-500 font-medium">Built for scale, secured for the future, and monitored 24/7/365.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400"><BarChart3 size={20}/></div>
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400"><ShieldCheck size={20}/></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="flex gap-8 p-10 rounded-[3rem] bg-white border border-gray-100 hover:border-[#de6f23]/30 hover:shadow-2xl transition-all duration-500 group">
              <div className={`flex-shrink-0 w-16 h-16 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${item.color} shadow-sm`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔄 COMPARISON SECTION */}
      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 p-12 md:p-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Standard vs. <span className="text-[#de6f23]">Dedicated</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto font-medium">Leased lines are not just 'faster internet'—they are a private lane on the information highway.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                "Guaranteed Bandwidth 24/7",
                "Priority NOC Support",
                "Multiple Static IPs",
                "Unlimited Data Usage",
                "BGP Peering Options",
                "Dedicated Account Manager"
                ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-[#de6f23]/40 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#de6f23]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#de6f23]" />
                    </div>
                    <span className="text-gray-200 font-bold text-sm tracking-tight">{text}</span>
                </div>
                ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none">
            FIBER
        </div>
      </section>

      {/* 💬 CONTACT CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-100 mb-10">
            <Headphones className="w-5 h-5 text-[#de6f23]" />
            <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Speak with our NOC Team</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-[1000] text-gray-900 mb-8 tracking-tighter leading-none">
            Powering <span className="text-[#de6f23]">Infinite</span> <br /> Possibilities.
        </h2>
        <p className="text-gray-500 mb-12 text-xl font-medium">
          Ready to eliminate downtime? Our network architects are standing by to design your dedicated fiber circuit.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl">
            Start Technical Design
          </a>
          <a href="tel:+918588822022" className="bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#c96320] transition-all shadow-lg shadow-[#de6f23]/20">
            Immediate Sales Call
          </a>
        </div>
      </section>
    </main>
  );
}