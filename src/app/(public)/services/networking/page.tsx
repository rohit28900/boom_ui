import { Metadata } from "next";
import { 
  Router, Server, Wifi, ShieldAlert, 
  Activity, CheckCircle, ArrowRight, 
  Map, Fingerprint, Layers, Cpu 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Networking Solutions | Boom Networks",
  description:
    "End-to-end LAN/WAN setup, WiFi deployment, monitoring, and enterprise network security services.",
};

const solutions = [
  {
    title: "LAN/WAN Architecture",
    description: "Custom-engineered networks designed for high-availability and zero-bottleneck performance.",
    icon: <Server className="w-6 h-6" />,
    tag: "Infrastructure"
  },
  {
    title: "Enterprise WiFi 6/6E",
    description: "High-density deployments with AI heat-mapping and seamless roaming for large-scale campuses.",
    icon: <Wifi className="w-6 h-6" />,
    tag: "Wireless"
  },
  {
    title: "Next-Gen Security",
    description: "Integrated firewall management, ZTNA, and intrusion detection to keep your data perimeter airtight.",
    icon: <ShieldAlert className="w-6 h-6" />,
    tag: "Security"
  },
  {
    title: "Managed NOC Services",
    description: "Proactive 24/7 monitoring that identifies and resolves vulnerabilities before they impact uptime.",
    icon: <Activity className="w-6 h-6" />,
    tag: "Monitoring"
  },
];

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🏗️ ARCHITECTURAL HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-50 bg-[#fafafa]">
        {/* Subtle Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#de6f23] text-[10px] font-black uppercase tracking-[0.25em] mb-8 shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                <span>System Integration Experts</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-[1000] text-gray-900 leading-[0.85] mb-10 tracking-tighter">
                Infrastructure <br /> 
                <span className="text-[#de6f23]">Without Limits.</span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl font-medium">
                We build the resilient digital nervous systems that modern businesses demand. 
                From structured cabling to AI-driven wireless, we engineer for the next decade.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:bg-black transition-all shadow-2xl flex items-center gap-3 active:scale-95">
                  Start My Audit <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-4 px-6 border-l border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                        Cisco / Fortinet / Ubiquiti <br /> <span className="text-[#de6f23]">Certified Engineers</span>
                    </p>
                </div>
              </div>
            </div>
            
            {/* Visual Icon Box */}
            <div className="relative hidden lg:block">
              <div className="w-[450px] h-[450px] bg-gradient-to-br from-[#de6f23]/10 to-transparent rounded-full flex items-center justify-center p-12">
                <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl border border-gray-100 flex items-center justify-center group overflow-hidden">
                    <Router className="w-40 h-40 text-[#de6f23]/10 absolute -bottom-10 -right-10 rotate-12 transition-transform group-hover:rotate-0 duration-700" />
                    <Layers className="w-32 h-32 text-gray-100 absolute top-10 left-10 -rotate-12" />
                    <div className="relative z-10 text-center">
                        <Router className="w-24 h-24 text-gray-900 mb-4 mx-auto" />
                        <div className="flex gap-1 justify-center">
                            {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />)}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 SOLUTIONS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-[1000] text-gray-900 tracking-tighter uppercase">Comprehensive Lifecycle</h2>
          <div className="w-24 h-1 bg-[#de6f23] mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#de6f23]/40 hover:shadow-2xl transition-all duration-500 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#de6f23] group-hover:text-white transition-all duration-500 text-[#de6f23]">
                {item.icon}
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{item.tag}</span>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ METHODOLOGY SECTION */}
      <section className="bg-gray-900 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Our Proven <br /> <span className="text-[#de6f23]">Approach.</span></h2>
              <p className="text-gray-400 font-medium mb-12">Building a high-performance network requires more than just hardware. It requires a repeatable, data-driven process.</p>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <CheckCircle className="text-[#de6f23] w-6 h-6" />
                        <h3 className="text-xl font-black text-white uppercase tracking-tight">The Boom Edge</h3>
                    </div>
                    <ul className="grid grid-cols-1 gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#de6f23]" /> Certified Network Architects</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#de6f23]" /> Vendor-Neutral Strategy</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#de6f23]" /> 10G/40G Core Backbones</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#de6f23]" /> Full CAD Documentation</li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 grid gap-6">
              {[
                { t: "Assessment", d: "Deep audit of physical space, RF interference, and traffic patterns.", icon: <Map /> },
                { t: "Optimization", d: "Precision configuration of VLANs, QoS, and routing protocols.", icon: <Activity /> },
                { t: "Deployment", d: "Phased implementation with zero-interruption failover strategies.", icon: <Layers /> },
                { t: "Security Audit", d: "Vulnerability scanning and biometric/ZTNA endpoint security.", icon: <Fingerprint /> }
              ].map((step, i) => (
                <div key={i} className="group flex items-center gap-8 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#de6f23]/10 text-[#de6f23] flex items-center justify-center font-black group-hover:bg-[#de6f23] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-white group-hover:text-gray-900 font-black text-lg uppercase tracking-tight mb-1">{step.t}</h4>
                    <p className="text-gray-400 group-hover:text-gray-500 text-sm font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background Branding */}
        <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
            LINK
        </div>
      </section>

      {/* 📞 FINAL CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-[1000] text-gray-900 mb-8 tracking-tighter leading-none">
          Ready to <span className="text-[#de6f23]">Build?</span>
        </h2>
        <p className="text-gray-500 mb-12 text-xl font-medium">
          Whether it is a single-office WiFi setup or a multi-city WAN backbone, 
          our engineers are ready to architect your next network.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#c96320] transition-all shadow-xl shadow-[#de6f23]/20">
            Consult an Architect
          </a>
          <a href="tel:+918588822022" className="bg-gray-50 text-gray-900 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border border-gray-200 hover:bg-gray-100 transition-all">
            Call Sales
          </a>
        </div>
      </section>
    </main>
  );
}