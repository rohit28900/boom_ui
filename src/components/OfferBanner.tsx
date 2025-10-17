"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

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

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#de6f23] via-[#ff7b2e] to-[#de6f23] text-white py-3 px-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Sparkles className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {badge && (
                <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-semibold">
                  {badge}
                </span>
              )}
              <h3 className="font-bold text-sm sm:text-base">{title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/90 mt-0.5">
              {description}
              {validUntil && (
                <span className="ml-2 text-white/80">• {validUntil}</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={ctaLink}
            className="bg-white text-[#de6f23] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {ctaText}
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close offer banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}