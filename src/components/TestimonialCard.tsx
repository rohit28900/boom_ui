"use client";

import { Star, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  author: string;
  rating: number;
};

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] 
      hover:shadow-[0_20px_40px_-15px_rgba(222,111,35,0.15)] transition-all duration-500 cursor-default h-full flex flex-col"
    >
      {/* Background Decorative Quote Mark */}
      <div className="absolute top-6 right-8 text-slate-50 group-hover:text-[#de6f23]/10 transition-colors">
        <Quote size={56} />
      </div>

      {/* Verified Badge & Rating Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={14}
              className={`transition-colors duration-300 ${
                i < rating ? "fill-[#de6f23] text-[#de6f23]" : "fill-slate-100 text-slate-100"
              }`} 
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
          <BadgeCheck size={12} className="text-[#de6f23]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified</span>
        </div>
      </div>

      {/* Quote Body */}
      <div className="relative z-10 mb-8 flex-grow">
        <p className="text-slate-600 font-medium leading-relaxed text-lg tracking-tight">
          "{quote}"
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-50 relative z-10">
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:bg-[#de6f23] transition-colors duration-500">
            {author.charAt(0)}
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
        </div>
        
        <div>
          <div className="font-[1000] text-slate-900 tracking-tighter text-base leading-none mb-1">
            {author}
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Enterprise User
          </div>
        </div>
      </div>
    </motion.div>
  );
}