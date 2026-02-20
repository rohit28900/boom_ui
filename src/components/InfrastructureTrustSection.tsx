"use client"

import { motion, useSpring, useInView, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Globe, Network, ShieldCheck, MapPin, Zap, Activity } from "lucide-react"

const stats = [
  { label: "States Covered", value: 8, suffix: "+", icon: MapPin },
  { label: "Cities Connected", value: 25, suffix: "+", icon: Globe },
  { label: "Fiber Deployed (KM)", value: 500, suffix: "+", icon: Network },
  { label: "Enterprise & Govt Sites", value: 20, suffix: "+", icon: ShieldCheck },
]

/**
 * 🛠️ Fixed Animated Counter
 * Extracts the raw numeric value from MotionValue to avoid "Objects are not valid" error.
 */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  
  const springValue = useSpring(motionValue, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  })

  // Set the motion value when in view
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  // Sync the spring animation to local state so React can render it
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-[1000] tracking-tighter text-slate-900 tabular-nums leading-none">
      {displayValue}
      <span className="text-[#de6f23]">{suffix}</span>
    </span>
  )
}

export default function InfrastructureTrustSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* 🌐 Subtle Fiber Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* 🛠️ TOP UTILITY BAR */}
        <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-100" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50/50 text-[#de6f23] text-[10px] font-black uppercase tracking-[0.3em]">
                <Activity className="w-3 h-3 animate-pulse" />
                Live Infrastructure Status
            </div>
            <div className="h-px w-12 bg-slate-100" />
        </div>

        {/* HEADER AREA */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-[1000] text-slate-900 tracking-[-0.06em] leading-[0.85]"
            >
              Pan-India <br />
              <span className="text-slate-300">Network</span> & <span className="text-[#de6f23]">Strength.</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-[3px] border-[#de6f23] pl-8 py-2"
            >
              <p className="text-slate-500 font-medium leading-relaxed italic">
                Carrier-grade fiber and surveillance backbone services 
                delivered nationwide in association with BSNL.
              </p>
            </motion.div>
          </div>
        </div>

        {/* STATS ENGINE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden mb-32 shadow-2xl shadow-slate-200/50">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-12 flex flex-col items-start group hover:bg-slate-50 transition-colors">
              <stat.icon className="w-5 h-5 text-slate-300 group-hover:text-[#de6f23] transition-colors mb-10" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🛰️ CAPABILITY ARCHITECTURE */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              title: "BSNL Association",
              desc: "Supporting national backbone and regional connectivity through BSNL-associated operations.",
              code: "01"
            },
            {
              title: "Fiber Infrastructure",
              desc: "OFC deployment, splicing, and maintenance for ISPs, enterprises, and telecom towers.",
              code: "02"
            },
            {
              title: "Tower Services",
              desc: "Carrier-grade connectivity for telecom towers, CCTV surveillance, and smart campuses.",
              code: "03"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black text-[#de6f23] font-mono tracking-tighter">[{item.code}]</span>
                <div className="h-px flex-1 bg-slate-100 group-hover:bg-[#de6f23]/30 transition-colors" />
              </div>
              <h4 className="text-2xl font-[1000] text-slate-900 tracking-tight mb-4 group-hover:text-[#de6f23] transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}