"use client";

import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  rating: number;
};

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm 
      hover:shadow-md transition-all transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-[#de6f23] flex items-center justify-center text-white font-semibold text-sm">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">Verified Customer</div>
        </div>
      </div>
    </div>
  );
}
