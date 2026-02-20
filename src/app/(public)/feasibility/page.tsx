"use client";

import { useState, useEffect, useMemo } from "react";
import {
  WifiHigh, MapPin, CheckCircle, Warning, MagnifyingGlass,
  Spinner, Globe, ArrowRight, Buildings, Info
} from "phosphor-react";
import Link from "next/link";

// 🔹 Optimized Data Structure moved outside for performance
const PIN_CODES = [
    { Locality: "Sector 2", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 3", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 4", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 5", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 6", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 7", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 8", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 9", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 10", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 12", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 22", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 57", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 58", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 59", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 60", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 62", Pincode: 201309, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 62A", Pincode: 201309, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 63 A", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 63", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 64", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 65", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 66", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 67", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 68", Pincode: 201307, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 69", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Ram Nagar ", Pincode: 110093, City: "Shahdhra", State: "Delhi" },
    { Locality: "Ram Nagar ", Pincode: 110032, City: "Shahdhra", State: "Delhi" },
    { Locality: "Phase 1", Pincode: 134113, City: "Panchkula", State: "Haryana" },
    { Locality: "Phase 2", Pincode: 134113, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 4", Pincode: 134112, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 8", Pincode: 134109, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 20", Pincode: 134116, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector-26 ", Pincode: 134116, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 41", Pincode: 160036, City: "Chandigarh", State: "Haryana" },
    { Locality: "Sector 91", Pincode: 140307, City: "Mohali", State: "Haryana" },
    { Locality: "kharar", Pincode: 140301, City: "Mohali", State: "Haryana" },
    { Locality: "balongi", Pincode: 160055, City: "Mohali", State: "Haryana" },
    { Locality: "sec 82", Pincode: 160059, City: "Mohali", State: "Haryana" }
];

export default function FeasibilityPage() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<any[]>([]);

  // 🔹 Memoized lookup table for instant O(1) access
  const pincodeMap = useMemo(() => {
    const mapped: Record<string, any[]> = {};
    PIN_CODES.forEach((item) => {
      const pin = item.Pincode.toString();
      if (!mapped[pin]) mapped[pin] = [];
      mapped[pin].push(item);
    });
    return mapped;
  }, []);

  const handleCheck = async () => {
    if (!pincode || pincode.length < 6) return;
    setLoading(true);
    setResult(null);
    
    // Simulate network delay for UX
    await new Promise((r) => setTimeout(r, 800));

    const matches = pincodeMap[pincode.trim()];
    if (matches) {
      setResult(true);
      setLocations(matches);
    } else {
      setResult(false);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#de6f23]/20">
      
      {/* 📡 MODERN HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#de6f23] text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                <Globe className="w-4 h-4" />
                <span>Live Network Coverage Check</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-[1000] tracking-tighter text-gray-900 leading-[0.85] mb-8">
                Is Boom Available <br />
                <span className="text-[#de6f23]">In Your Street?</span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                We are rapidly expanding our fiber backbone across Delhi-NCR and beyond. 
                Enter your PIN code to verify 1Gbps feasibility.
            </p>
        </div>
      </section>

      {/* 🔍 SEARCH CONSOLE */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 pb-32 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-16">
          
          <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code..."
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-[#de6f23] focus:bg-white rounded-[2rem] px-10 py-8 text-2xl font-black tracking-widest placeholder:text-gray-300 placeholder:tracking-normal outline-none transition-all shadow-inner"
                />
                <button
                  onClick={handleCheck}
                  disabled={loading || pincode.length < 6}
                  className="absolute right-3 top-3 bottom-3 px-8 rounded-[1.5rem] bg-[#de6f23] text-white font-black text-xs uppercase tracking-widest hover:bg-black transition-all disabled:opacity-30 disabled:hover:bg-[#de6f23] flex items-center gap-3 active:scale-95 shadow-xl shadow-[#de6f23]/20"
                >
                  {loading ? <Spinner className="animate-spin" size={20} /> : <MagnifyingGlass weight="bold" size={20} />}
                  <span>{loading ? "Scanning..." : "Verify"}</span>
                </button>
              </div>
              <p className="mt-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <Info size={14} /> Only 6-digit Indian PIN codes supported
              </p>
          </div>

          {/* 📊 RESULTS INTERFACE */}
          {result !== null && (
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {result ? (
                <div className="space-y-12">
                   <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-[2rem] flex items-center justify-center mb-6 shadow-sm border border-green-100">
                            <CheckCircle size={44} weight="fill" />
                        </div>
                        <h3 className="text-4xl font-[1000] text-gray-900 tracking-tight mb-2">Maximum Speed Feasible!</h3>
                        <p className="text-gray-500 font-medium">We found {locations.length} service zones under PIN {pincode}:</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {locations.map((loc, idx) => (
                      <div key={idx} className="group bg-gray-50 p-6 rounded-[2rem] border border-gray-100 hover:bg-white hover:border-[#de6f23]/30 transition-all flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#de6f23] shadow-sm border border-gray-100 group-hover:bg-[#de6f23] group-hover:text-white transition-all">
                            <MapPin size={24} weight="bold" />
                        </div>
                        <div>
                            <p className="text-lg font-black text-gray-900 tracking-tight leading-none mb-1 uppercase">{loc.Locality}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{loc.City}, {loc.State}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link href="/plans" className="px-12 py-5 bg-gray-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-black transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                      Configure My Plan <ArrowRight weight="bold" />
                    </Link>
                    <Link href="/contact" className="px-12 py-5 border border-gray-200 text-gray-900 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gray-50 transition-all">
                      Speak to an Engineer
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-orange-50/50 rounded-[3rem] p-12 text-center border border-orange-100 border-dashed">
                  <div className="w-20 h-20 bg-orange-100 text-[#de6f23] rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                    <Warning size={44} weight="fill" />
                  </div>
                  <h3 className="text-3xl font-[1000] text-gray-900 tracking-tight mb-4 uppercase">Out of Direct Coverage</h3>
                  <p className="text-gray-500 font-medium max-w-md mx-auto mb-10">
                    We haven't reached {pincode} yet, but we might be nearby! Register your interest and we'll prioritize your sector.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-[#de6f23] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-[#de6f23]/20 active:scale-95">
                    Request Network Expansion <ArrowRight weight="bold" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 🏢 CORPORATE FOOTER NOTE */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {[
                { icon: WifiHigh, t: "FTTH Ready", d: "Pure fiber-to-the-home architecture in all verified zones." },
                { icon: Buildings, t: "Enterprise Feasibility", d: "Dedicated Leased Line feasibility requires manual survey." },
                { icon: Globe, t: "NCR Backbone", d: "Direct peering with major content hubs for <5ms latency." }
            ].map((item, i) => (
                <div key={i} className="space-y-4">
                    <item.icon size={32} className="text-[#de6f23] mx-auto md:mx-0" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">{item.t}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.d}</p>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}