import { Metadata } from "next";
import { Lock, ShieldCheck, Zap, Globe, HardHat, ArrowRight, ShieldAlert, Fingerprint, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Government & Defense Connectivity | Boom Networks",
  description:
    "Secure, encrypted, and compliant connectivity infrastructure for government and defense operations.",
};

const features = [
  {
    title: "Mission-Critical Security",
    description: "Military-grade end-to-end encryption and advanced VPN tunneling for sensitive data transfer.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tag: "Encrypted"
  },
  {
    title: "Sovereign Infrastructure",
    description: "Private Dedicated Networks (PDN) and isolated physical circuits for complete data sovereignty.",
    icon: <Globe className="w-6 h-6" />,
    tag: "Isolated"
  },
  {
    title: "Regulatory Compliance",
    description: "Fully compliant with government-grade standards and rigorous security frameworks.",
    icon: <Lock className="w-6 h-6" />,
    tag: "Compliant"
  },
  {
    title: "Rapid Response",
    description: "24/7 proactive monitoring with priority on-site response and field engineering support.",
    icon: <HardHat className="w-6 h-6" />,
    tag: "Priority"
  },
];

export default function GovernmentPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🏛️ SOVEREIGN HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        {/* Subtle Radar/Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl">
                <ShieldAlert className="w-3.5 h-3.5 text-[#de6f23]" />
                <span>Classified-Grade Infrastructure</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-[1000] text-gray-900 leading-[0.85] mb-10 tracking-tighter">
                Defense <br /> 
                <span className="text-[#de6f23]">Resilience.</span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl font-medium">
                Engineered for agencies that cannot afford a single second of downtime. 
                We provide the secure, sovereign backbone for modern governance and national defense.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-2xl flex items-center gap-3 active:scale-95">
                  Request Security Briefing <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* 🛡️ Visual "Fortress" Element */}
            <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-[500px] ml-auto">
                    <div className="absolute inset-0 bg-[#de6f23]/5 rounded-[4rem] rotate-6 scale-95" />
                    <div className="absolute inset-0 bg-gray-900/5 rounded-[4rem] -rotate-3" />
                    <div className="relative h-full bg-white rounded-[4rem] border border-gray-100 shadow-2xl p-12 flex flex-col justify-between overflow-hidden group">
                        <Landmark className="absolute -top-10 -right-10 w-64 h-64 text-gray-50 opacity-50 group-hover:text-[#de6f23]/10 transition-colors duration-700" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
                                <Fingerprint className="w-8 h-8 text-[#de6f23]" />
                            </div>
                            <h3 className="text-2xl font-[1000] text-gray-900 tracking-tight">DATA SOVEREIGNTY</h3>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Status: Restricted Access</p>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#de6f23] animate-pulse" style={{width: `${40 + (i * 20)}%`, animationDelay: `${i * 0.5}s`}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-12 rounded-[3rem] border border-gray-100 hover:border-[#de6f23]/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-[#de6f23]/10 text-[#de6f23] w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#de6f23] group-hover:text-white transition-all duration-500 shadow-sm">
                {feature.icon}
              </div>
              <span className="text-[10px] font-black text-[#de6f23] uppercase tracking-[0.2em] mb-3 block">{feature.tag}</span>
              <h3 className="text-2xl font-[1000] text-gray-900 mb-4 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 🔒 HIGH-SECURITY CTA BLOCK */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gray-900 text-white relative overflow-hidden group">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-[#de6f23] font-black text-[10px] uppercase tracking-widest mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#de6f23] animate-ping" />
                    Personnel Clearance Active
                </div>
              <h2 className="text-4xl md:text-6xl font-[1000] mb-6 tracking-tighter leading-none">Ready to secure <br /> your operations?</h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                Our specialized Public Sector team is cleared to discuss bespoke defense 
                infrastructure and secure government procurement paths.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full lg:w-auto">
                <a href="/contact" className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#de6f23] hover:text-white transition-all text-center">
                    Contact Enterprise Team
                </a>
                <p className="text-[9px] text-center font-bold text-gray-500 uppercase tracking-widest">Encrypted Communication Guaranteed</p>
            </div>
          </div>
          
          {/* Abstract Cyber Detail */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
            SOVEREIGN
          </div>
        </div>
      </section>
    </main>
  );
}