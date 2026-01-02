// src/app/home/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  ShieldCheck,
  Headphones,
  Cloud,
  Router,
  Globe,
  Phone,
  Network,
  Lock,
  Server,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  Wrench
} from "lucide-react";
import { MapPin, Globe2, Users } from "lucide-react";

import HeroSlider from "@/components/HeroSlider";
import TestimonialCard from "@/components/TestimonialCard";
import OfferBanner from "@/components/OfferBanner";
import { seoData } from "@/lib/seo.config";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = seoData.home;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: "Boom Networks",
  description: "High-speed fiber internet provider",
  areaServed: "IN",
  serviceType: "Internet Service Provider",
};

export default function Home() {
  const showOffer = true;

  const offerConfig = {
    title: "New Year Special Offer!",
    description: "Get 50% OFF on installation + 3 Months Free Netflix",
    ctaText: "Claim Offer",
    ctaLink: "/plans?offer=NewYear2026",
    validUntil: "Valid until Jan 30, 2026",
    badge: "Limited Time",
  };

  const features = [
    {
      icon: Wifi,
      title: "Up to 1 Gbps Speed",
      description:
        "Lightning-fast fiber internet for seamless streaming, gaming, and remote work.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime SLA",
      description:
        "Enterprise-grade reliability backed by redundant fiber infrastructure.",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock technical assistance via phone, chat, and email.",
    },
  ];

  const services = [
    {
      icon: Phone,
      title: "VoIP Cloud Telephony",
      description:
        "Cloud-based telephony with IVR, call recording, and analytics for seamless communication.",
      features: [
        "IVR Systems",
        "Call Recording",
        "Analytics",
        "Multi-channel Support",
      ],
      href: "/services/voip",
    },
    {
      icon: Wifi,
      title: "Home Broadband & Enterprise Internet",
      description:
        "High-speed, reliable connectivity designed for homes and enterprises with guaranteed uptime.",
      features: [
        "99.9% Uptime",
        "Dedicated Bandwidth",
        "24/7 Support",
        "Scalable Plans",
      ],
      href: "/services/internet",
    },
    {
      icon: Globe,
      title: "SD-WAN Solutions",
      description:
        "Intelligent network routing and optimization for enterprise-grade performance and security.",
      features: [
        "Centralized Control",
        "Cloud Ready",
        "Secure Routing",
        "Cost Optimization",
      ],
      href: "/services/sdwan",
    },
    {
      icon: Network,
      title: "Internet Leased Lines",
      description:
        "Dedicated, symmetrical internet connections for mission-critical business applications.",
      features: [
        "Low Latency",
        "SLA Guaranteed",
        "Symmetrical Speed",
        "Enterprise Grade",
      ],
      href: "/services/leased-lines",
    },
    {
      icon: Router,
      title: "Networking Solutions",
      description:
        "End-to-end network architecture, cabling, monitoring, and integrated security for enterprises.",
      features: [
        "LAN/WAN Setup",
        "Monitoring",
        "Integrated Security",
        "Custom Design",
      ],
      href: "/services/networking",
    },
    {
      icon: Lock,
      title: "Government & Defense Connectivity",
      description:
        "Secure and compliant infrastructure tailored for government and defense network needs.",
      features: [
        "End-to-End Encryption",
        "Private Infrastructure",
        "24/7 Monitoring",
        "Compliance Ready",
      ],
      href: "/services/government",
    },
  ];

  const testimonials = [
    {
      quote:
        "Switched from my old ISP and the difference is night and day! Super reliable connection.",
      author: "Priya Sharma",
      rating: 4,
    },
    {
      quote:
        "Perfect for my home office setup. Great speed and responsive support team!",
      author: "Rahul Mehta",
      rating: 5,
    },
    {
      quote:
        "Excellent coverage throughout my home. Smooth streaming and great value.",
      author: "Anjali Kumar",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "25+", label: "Cities Covered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {showOffer && <OfferBanner {...offerConfig} />}

      {/* Hero Section */}
      <section className="relative" aria-label="Hero banner">
        <HeroSlider />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
          <Link
            href="/plans"
            className="group bg-[#de6f23] hover:bg-[#c96320] px-10 py-4 rounded-full text-lg font-semibold text-white shadow-2xl transition-all hover:shadow-[#de6f23]/50 hover:scale-105 flex items-center gap-2"
          >
            View Plans
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-white/90 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            Plans starting from ₹499/month
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#de6f23] mb-12">
            Why Choose Boom Networks
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-[#de6f23]/10 hover:shadow-xl hover:shadow-[#de6f23]/20 transition-all border border-gray-100"
              >
                <f.icon className="w-12 h-12 mx-auto mb-4 text-[#de6f23]" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#de6f23] mb-12">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="p-8 border rounded-2xl shadow-sm shadow-[#de6f23]/5 hover:shadow-lg hover:shadow-[#de6f23]/15 transition-all text-left group"
              >
                <s.icon className="w-10 h-10 mb-4 text-[#de6f23]" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#de6f23] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1 list-disc pl-5">
                  {s.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <span className="text-[#de6f23] font-medium group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    
    {/* Mission Heading */}
    <h2 className="text-3xl font-bold text-[#de6f23] mb-4">
      Connecting Delhi-NCR with Future-Ready Fiber Internet
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-sm">
      We are building a next-generation internet network designed for 
      homes, startups, gamers, and enterprises — 
      delivering fast, reliable, and affordable FTTH across Delhi-NCR.
    </p>

    {/* Coverage & Trust Grid */}
    <div className="grid md:grid-cols-4 gap-6 mb-16">
      
      <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
        <Wifi className="w-10 h-10 text-[#de6f23] mx-auto mb-3" />
        <h3 className="font-semibold text-lg text-gray-800">FTTH Network</h3>
        <p className="text-gray-500 text-sm">High-speed fiber to home & business</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
        <Globe2 className="w-10 h-10 text-[#de6f23] mx-auto mb-3" />
        <h3 className="font-semibold text-lg text-gray-800">Low-Latency Backbone</h3>
        <p className="text-gray-500 text-sm">Built for 4K streaming, gaming & WFH</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
        <Users className="w-10 h-10 text-[#de6f23] mx-auto mb-3" />
        <h3 className="font-semibold text-lg text-gray-800">Local NOC Support</h3>
        <p className="text-gray-500 text-sm">Dedicated Delhi-NCR service engineers</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
        <MapPin className="w-10 h-10 text-[#de6f23] mx-auto mb-3" />
        <h3 className="font-semibold text-lg text-gray-800">Expanding Across NCR</h3>
        <p className="text-gray-500 text-sm">Shahdara • Noida • Ghaziabad • Gurgaon</p>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center">
      <h4 className="text-xl font-bold text-gray-800 mb-2">Want Fiber Connection?</h4>
      <p className="text-gray-600 mb-6 text-sm">Call our support team to check coverage in your area.</p>
      <a
        href="tel:+91 8588822022"
        className="bg-[#de6f23] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-[#c9621f] transition"
      >
        Call Now
      </a>
    </div>

  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="max-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#de6f23] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                author={t.author}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactModal image="/form.png"/>
    </main>
  );
}
