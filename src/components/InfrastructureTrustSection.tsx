"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Globe, Network, ShieldCheck, MapPin, Zap } from "lucide-react"

const stats = [
  { label: "States Covered", value: 8, suffix: "+", icon: MapPin },
  { label: "Cities Connected", value: 25, suffix: "+", icon: Globe },
  { label: "Fiber Deployed (KM)", value: 500, suffix: "+", icon: Network },
  { label: "Enterprise & Govt Sites", value: 20, suffix: "+", icon: ShieldCheck },
]

function AnimatedCounter({ value, suffix = "" }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 1800
    const step = end / (duration / 20)

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl md:text-6xl font-extrabold text-gray-900 tabular-nums tracking-tighter">
      {count}
      {suffix}
    </span>
  )
}

export default function InfrastructureTrustSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Clean & Left Aligned for a modern feel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-[#de6f23] font-bold tracking-widest uppercase text-xs mb-4">
              <Zap className="w-4 h-4" />
              Infrastructure Capability
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Pan-India Network & <br />
              <span className="text-[#de6f23]">Strength.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-gray-500 text-lg leading-relaxed border-l-2 border-gray-100 pl-6"
          >
            Carrier-grade fiber and surveillance backbone services 
            delivered nationwide in association with BSNL.
          </motion.p>
        </div>

        {/* Stats - No Cards, just clean spacing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-y border-gray-100 py-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capability Section - Typographic focus */}
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              title: "BSNL Association",
              desc: "Supporting national backbone and regional connectivity through BSNL-associated operations.",
            },
            {
              title: "Fiber Infrastructure",
              desc: "OFC deployment, splicing, and maintenance for ISPs, enterprises, and telecom towers.",
            },
            {
              title: "Tower Services",
              desc: "Carrier-grade connectivity for telecom towers, CCTV surveillance, and smart campuses.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#de6f23]"></span>
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed pl-11">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}