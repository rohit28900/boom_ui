import { Metadata } from "next";
import { 
  Phone, Mic2, PieChart, MessageSquare, 
  Smartphone, ArrowRight, CheckCircle, 
  HeadphonesIcon, ShieldCheck, Globe, 
  Server, Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "VoIP Cloud Telephony | Boom Networks",
  description:
    "Cloud-based telephony with IVR, call recording, analytics, and multi-channel support for modern businesses.",
};

const voipFeatures = [
  {
    title: "Intelligent IVR",
    description: "Customizable auto-attendants that route callers to the right department instantly.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Secure Recording",
    description: "High-fidelity call recording and archiving for compliance and quality assurance.",
    icon: <Mic2 className="w-6 h-6" />,
    color: "bg-orange-50 text-[#de6f23]"
  },
  {
    title: "Advanced Analytics",
    description: "Real-time dashboards showing call volumes and agent performance metrics.",
    icon: <PieChart className="w-6 h-6" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Omnichannel Sync",
    description: "Unified communication across Voice, SMS, and WhatsApp in one platform.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
];

export default function VoipPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      
      {/* 🚀 PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] bg-[#de6f23]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#de6f23] text-xs font-black uppercase tracking-widest mb-8">
                <Zap className="w-3.5 h-3.5 fill-[#de6f23]" />
                <span>Next-Gen Voice Infrastructure</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-[1000] text-gray-900 tracking-tighter leading-[0.9] mb-8">
                The Future of <br />
                <span className="text-[#de6f23]">Business Voice.</span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg font-medium">
                Eliminate bulky EPABX hardware. Boom Networks delivers a carrier-grade cloud phone system that scales with your growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-2xl flex items-center gap-3 active:scale-95">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-4 px-6 border-l border-gray-100">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />)}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trusted by 500+ <br/> Enterprises</p>
                </div>
              </div>
            </div>

            {/* Visual "Cloud" Representation */}
            <div className="relative">
              <div className="relative bg-gray-50 rounded-[3rem] p-4 border border-gray-100 shadow-inner">
                <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600"><Phone size={20} /></div>
                        <div><p className="text-xs font-black text-gray-900">Active Call</p><p className="text-[10px] text-gray-400">Incoming from HubSpot CRM</p></div>
                      </div>
                      <div className="text-[10px] font-bold text-[#de6f23] animate-pulse">00:42</div>
                    </div>
                    <div className="h-32 flex items-end gap-1 px-4">
                      {[40, 70, 45, 90, 65, 80, 30, 100, 50, 75].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#de6f23]/20 rounded-t-sm group-hover:bg-[#de6f23] transition-all" />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-2xl"><p className="text-[10px] font-bold text-blue-400 uppercase">Latency</p><p className="text-lg font-black text-blue-900">12ms</p></div>
                      <div className="p-4 bg-orange-50 rounded-2xl"><p className="text-[10px] font-bold text-[#de6f23] uppercase">Uptime</p><p className="text-lg font-black text-[#de6f23]">99.9%</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 THE BENTO FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Unmatched Feature Set</h2>
            <p className="text-gray-500 font-medium">Why settle for standard dial-tone when you can have a global communication hub?</p>
          </div>
          <div className="flex gap-2">
            <div className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#de6f23] transition-colors cursor-pointer"><Server size={20} /></div>
            <div className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#de6f23] transition-colors cursor-pointer"><ShieldCheck size={20} /></div>
            <div className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#de6f23] transition-colors cursor-pointer"><Globe size={20} /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {voipFeatures.map((feature, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔄 INTEGRATION SECTION */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-12 md:p-20 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                  Plays well with <br />
                  <span className="text-[#de6f23]">your entire stack.</span>
                </h2>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                  Bridge the gap between conversations and data. Our API-first approach means your calls 
                  sync automatically with the tools your team uses every day.
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {["One-Click Dialing", "Auto Activity Logs", "CRM Contact Sync", "Live Analytics Dashboard"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-[#de6f23] flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                  {[1,2,3,4,5,6,7,8,9].map((i) => (
                      <div key={i} className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 hover:border-[#de6f23]/50 transition-all group">
                          <div className="w-10 h-10 bg-gray-700 rounded-full group-hover:bg-[#de6f23] transition-colors" />
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </section>

      {/* 📣 FINAL CTA */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <div className="w-20 h-20 rounded-full bg-[#de6f23]/10 flex items-center justify-center mx-auto mb-10 text-[#de6f23]">
          <HeadphonesIcon size={40} />
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Scale your voice, <br/> <span className="text-[#de6f23]">not your overhead.</span></h2>
        <p className="text-gray-500 mb-12 text-xl font-medium">
          Ready to modernize your communications? Speak with a Boom voice architect today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#c96320] transition-all">
            Get Started Now
          </a>
          <a href="tel:+918588822022" className="bg-gray-50 text-gray-900 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-gray-200 hover:bg-gray-100 transition-all">
            Call Sales
          </a>
        </div>
      </section>
    </main>
  );
}