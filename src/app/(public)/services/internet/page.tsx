import { Metadata } from "next";
import { Wifi, Home, Briefcase, Clock, Headphones, Rocket, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Broadband & Enterprise Internet | Boom Networks",
  description:
    "Reliable high-speed broadband and enterprise-grade internet solutions with 99.9% uptime and robust connectivity.",
};

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#de6f23]/20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#de6f23]/10 text-[#de6f23] text-sm font-bold mb-6">
              <Wifi className="w-4 h-4" />
              <span>Unlimited Fiber Connectivity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Fast. Stable. <span className="text-[#de6f23]">Unstoppable.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Whether you're powering a global enterprise or a smart home, 
              Boom Networks delivers the low-latency fiber you can depend on.
            </p>
          </div>
        </div>
        
        {/* Subtle background circuit pattern or grid could go here */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </section>

      {/* Segment Selection */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 mb-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Home Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-[#de6f23]/30 transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#de6f23] group-hover:text-white transition-colors">
              <Home className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Broadband</h2>
            <p className="text-gray-600 mb-8">Ultra-smooth 4K streaming, lag-free gaming, and reliable remote work for the whole family.</p>
            <ul className="space-y-4 mb-10">
              {["Unlimited Data", "Zero Throttling", "Next-Gen WiFi Router"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#de6f23]" /> {item}
                </li>
              ))}
            </ul>
            <a href="/contact" className="flex items-center justify-center w-full py-4 rounded-xl font-bold border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
              View Home Plans
            </a>
          </div>

          {/* Enterprise Card */}
          <div className="bg-gray-900 p-10 rounded-3xl shadow-xl shadow-orange-900/10 border border-gray-800 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#de6f23] rounded-2xl flex items-center justify-center mb-6 text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Enterprise Internet</h2>
              <p className="text-gray-400 mb-8">Dedicated capacity with enterprise-grade SLAs and priority routing for business apps.</p>
              <ul className="space-y-4 mb-10">
                {["99.9% Uptime SLA", "Symmetrical Speeds", "Static IP Address"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 font-medium">
                    <ShieldCheck className="w-5 h-5 text-[#de6f23]" /> {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="flex items-center justify-center w-full py-4 rounded-xl font-bold bg-[#de6f23] text-white hover:bg-[#c96320] transition-all">
                Get Enterprise Quote
              </a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#de6f23]/10 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Clock />, title: "99.9% Uptime", desc: "Reliability you can bank on." },
              { icon: <Rocket />, title: "Low Latency", desc: "Optimized for speed." },
              { icon: <Headphones />, title: "24/7 Support", desc: "Local expert assistance." },
              { icon: <Wifi />, title: "Full Fiber", desc: "Future-proof technology." },
            ].map((feature, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-[#de6f23] mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Not sure which plan is right?</h2>
            <p className="text-gray-600">Our team can help you assess your bandwidth needs.</p>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-2 text-[#de6f23] font-bold text-lg"
          >
            Speak to an Expert
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}