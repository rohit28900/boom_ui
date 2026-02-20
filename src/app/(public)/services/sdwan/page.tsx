import { Metadata } from "next";
import { 
  Globe, Cpu, Settings, ShieldCheck, Zap, 
  ArrowRight, MousePointer2, Layers, 
  Activity, BarChart3, Lock, Network 
} from "lucide-react";

export const metadata: Metadata = {
  title: "SD-WAN Solutions | Boom Networks",
  description:
    "Empower your enterprise with intelligent SD-WAN solutions — optimized routing, secure connectivity, and cloud-ready management.",
};

const capabilities = [
  {
    title: "Intelligent Path Selection",
    description: "Real-time traffic steering that automatically routes mission-critical apps over the fastest available link.",
    icon: <Zap className="w-6 h-6" />,
    stats: "0ms Failover"
  },
  {
    title: "Zero-Touch Provisioning",
    description: "Deploy new branch offices in minutes, not days, with centralized automated orchestration.",
    icon: <Settings className="w-6 h-6" />,
    stats: "10x Faster Deployment"
  },
  {
    title: "Integrated SASE Security",
    description: "Built-in end-to-end encryption and secure tunneling to protect data across every endpoint.",
    icon: <ShieldCheck className="w-6 h-6" />,
    stats: "AES-256 Auth"
  },
  {
    title: "Hybrid Cloud Ready",
    description: "Seamlessly bridge on-premise data centers with AWS, Azure, and Google Cloud environments.",
    icon: <Layers className="w-6 h-6" />,
    stats: "Multi-Cloud Sync"
  },
];

export default function SdwanPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🌐 HIGH-TECH HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-[#0a0a0a]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#de6f23] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Cpu className="w-4 h-4" />
                <span>Next-Gen Orchestration</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-[1000] text-white leading-[0.9] mb-8 tracking-tighter">
                Software <br />
                <span className="text-[#de6f23]">Defined.</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-lg font-medium">
                Ditch the legacy MPLS bottlenecks. Boom Networks SD-WAN 
                orchestrates your entire global fabric through a single pane of glass.
              </p>

              <div className="flex flex-wrap gap-5">
                <a href="/contact" className="bg-[#de6f23] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#c96320] transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(222,111,35,0.3)]">
                  Execute Demo <MousePointer2 className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-3 text-white/60 font-bold text-sm">
                  <Activity className="w-5 h-5 text-green-500" />
                  Live Network Status: Optimal
                </div>
              </div>
            </div>

            {/* Visual Element - "The Orchestrator" */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#de6f23] to-orange-900 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-zinc-900 border border-white/10 p-4 rounded-[2.5rem] shadow-2xl">
                <div className="bg-black rounded-3xl p-8 aspect-video flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <div className="h-1 w-24 bg-white/20 rounded-full" />
                      </div>
                      <div className="h-1 w-16 bg-white/10 rounded-full" />
                    </div>
                    <Network className="w-10 h-10 text-[#de6f23]/50" />
                  </div>
                  
                  {/* Dynamic Path Visual */}
                  <div className="flex items-end gap-2 h-24">
                    {[60, 85, 40, 95, 70, 55, 80].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-[#de6f23] to-orange-400/20 rounded-t-lg" />
                    ))}
                  </div>

                  <div className="flex justify-between text-[8px] font-black text-white/40 uppercase tracking-widest pt-4 border-t border-white/5">
                    <span>Traffic Routing: AI-Optimal</span>
                    <span>Lat: 4ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 CAPABILITIES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col hover:border-[#de6f23] transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 text-[#de6f23] flex items-center justify-center mb-8 group-hover:bg-[#de6f23] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              <div className="pt-4 border-t border-gray-50">
                <span className="text-[10px] font-black text-[#de6f23] uppercase tracking-widest">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ TECHNICAL SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">Engineered for Resilience.</h2>
            <p className="text-gray-500 font-medium mb-8">Our SD-WAN fabric is built on top of global tier-1 peering points to ensure zero packet loss.</p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3"><BarChart3 className="text-[#de6f23] w-5 h-5"/> <span className="font-bold text-sm">Real-time Jitter Buffering</span></div>
               <div className="flex items-center gap-3"><Lock className="text-[#de6f23] w-5 h-5"/> <span className="font-bold text-sm">IPsec / 256-bit Encryption</span></div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { t: "Visibility", d: "Granular app-level control for over 3,500+ applications." },
               { t: "Scalability", d: "Add new nodes globally with one-click cloud orchestration." },
               { t: "Redundancy", d: "Automatic failover between Fiber, LTE, and Satellite links." },
               { t: "Compliance", d: "Meets SOC2, HIPAA, and PCI DSS connectivity standards." }
             ].map((box, i) => (
               <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-200/50">
                 <h4 className="font-black text-[#de6f23] uppercase text-xs tracking-widest mb-2">{box.t}</h4>
                 <p className="text-sm text-gray-600 leading-relaxed font-medium">{box.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 📣 DYNAMIC CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gray-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-[1000] text-white mb-8 tracking-tighter leading-none">
                    Ready to <span className="text-[#de6f23]">Network Smarter?</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium">
                    Schedule a whiteboard session with our lead network engineers to map out your optimized SD-WAN transition.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                    Get Custom Architecture
                  </a>
                  <a href="tel:+918588822022" className="bg-white/5 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">
                    Consult an Engineer
                  </a>
                </div>
            </div>
            
            {/* Background Branding */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
                SD-WAN
            </div>
        </div>
      </section>
    </main>
  );
}