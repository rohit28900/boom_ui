"use client";

import ImageSlider from "@/components/ImageSlider";

export default function HeroSection() {
  const slides = ["/banner.jpeg", "/banner2.jpeg", "/isp.png"];

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider slides={slides} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-8">
        <h1 className="text-6xl font-extrabold leading-tight drop-shadow-md">
          <span className="text-orange-500">Boom Networks</span> <br />
          Internet for Modern India
        </h1>
        <p className="text-lg text-gray-100 max-w-xl mx-auto">
          Experience ultra-fast fiber broadband with unlimited data — starting at just{" "}
          <span className="font-semibold text-orange-400">₹499/month</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#plans-section"
            className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 hover:scale-105 transition-all duration-300"
          >
            View Plans
          </a>
          <a
            href="/contact"
            className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-xl font-semibold hover:bg-orange-100/10 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
