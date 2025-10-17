"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/banner/11.png",
    title: "Lightning-Fast Fiber Internet",
    subtitle:
      "Experience blazing speeds and unmatched reliability starting at ₹499/month.",
    button1: { label: "View Plans", href: "#plans", color: "orange" },
    button2: { label: "Contact Us", href: "/contact", color: "blue" },
  },
  {
    image: "/banner/11.png",
    title: "Built for the Modern Home",
    subtitle: "Stream, game, and work from home with seamless connectivity.",
    button1: { label: "Check Availability", href: "/contact", color: "blue" },
    button2: { label: "Explore Plans", href: "#plans", color: "orange" },
  },
  {
    image: "/banner/11.png",
    title: "Reliable Internet, 24/7 Support",
    subtitle:
      "Enjoy enterprise-grade uptime and expert technical support round the clock.",
    button1: { label: "Join Now", href: "#plans", color: "orange" },
    button2: { label: "Talk to Sales", href: "/contact", color: "blue" },
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden group bg-white">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // ✅ Fix overlapping by using crossFade
        loop
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass:
            "inline-block w-3 h-3 bg-gray-300 mx-2 cursor-pointer transition-all duration-300 rounded-full",
          bulletActiveClass: "!bg-[#de6f23] !w-10 !rounded-full",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Wrapper with isolation to prevent stacking issues */}
            <div className="relative w-full h-full flex flex-col lg:flex-row isolate">
              {/* Left Content */}
              <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-24 w-full lg:w-1/2 bg-white/90 z-10">
                <div className="animate-fadeIn">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#de6f23]">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base md:text-lg lg:text-xl text-[#0096FF] font-medium leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link
                      href={slide.button1.href}
                      className={`${
                        slide.button1.color === "orange"
                          ? "bg-[#de6f23] hover:bg-[#c96320]"
                          : "bg-[#0096FF] hover:bg-[#0087e6]"
                      } text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {slide.button1.label}
                    </Link>

                    <Link
                      href={slide.button2.href}
                      className={`${
                        slide.button2.color === "orange"
                          ? "bg-[#de6f23] hover:bg-[#c96320]"
                          : "bg-[#0096FF] hover:bg-[#0087e6]"
                      } text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {slide.button2.label}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full lg:w-1/2 h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-right"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#de6f23] hover:text-white hover:border-[#de6f23] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#0096FF] hover:text-white hover:border-[#0096FF] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="hero-pagination flex items-center justify-center"></div>
      </div>

      {/* Simple fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
