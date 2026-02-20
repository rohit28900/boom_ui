"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OfferBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  validUntil?: string;
  badge?: string;
}

export default function OfferBanner({
  title,
  description,
  ctaText,
  ctaLink,
  validUntil,
  badge,
}: OfferBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="relative overflow-hidden z-[100]"
        >
          {/* Main Container with Background Treatment */}
          <div className="bg-slate-900 border-b border-white/5 relative group">
            
            {/* Animated Gradient Accent (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#de6f23]/20 via-transparent to-[#de6f23]/20 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-3 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Left Side: Content & Badge */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-[#de6f23]/10 border border-[#de6f23]/20 text-[#de6f23]">
                    <Sparkles size={20} className="animate-pulse" />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-0.5">
                      {badge && (
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-[#de6f23] text-white">
                          {badge}
                        </span>
                      )}
                      <h3 className="font-black tracking-tight text-sm text-white uppercase">
                        {title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <p className="text-xs font-medium text-slate-400">
                          {description}
                        </p>
                        {validUntil && (
                          <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-bold text-[#de6f23] uppercase tracking-wider">
                            <Clock size={12} />
                            {validUntil}
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Action & Close */}
                <div className="flex items-center gap-6">
                  <Link
                    href={ctaLink}
                    className="group/btn flex items-center gap-2 bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 hover:bg-[#de6f23] hover:text-white transition-all shadow-xl shadow-black/20"
                  >
                    {ctaText}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    aria-label="Close offer banner"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}