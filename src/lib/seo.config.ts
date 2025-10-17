// src/lib/seo.config.ts
import type { Metadata } from "next";

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://boomui-production.up.railway.app/",
  name: "Boom Network",
  description:
    "Affordable broadband plans with PAN India coverage. Experience high-speed fiber internet with Boom Networks.",
  keywords: [
    "Boom Network",
    "ISP",
    "Broadband",
    "Fiber Internet",
    "High-Speed",
    "Cyber Security",
    "Internet Service Provider",
    "PAN India Broadband",
  ],
  defaultImage: "/og-image.jpg",
};

// All SEO definitions in one object
export const seoData: Record<string, Metadata> = {
  home: {
    title: "Boom Network | High-Speed Fiber Internet for Modern India",
    description:
      "Experience up to 1 Gbps fiber broadband with OTT bundles, enterprise solutions, and 24/7 support. Reliable internet for homes and businesses across India.",
    keywords:
      "fiber internet, broadband, ISP India, high-speed internet, 1 Gbps, OTT bundles, business internet",
    alternates: { canonical: `${siteConfig.baseUrl}` },
    openGraph: {
      title: "Boom Network | High-Speed Fiber Internet",
      description:
        "Enjoy blazing-fast broadband, OTT bundles, and 24/7 support from Boom Networks.",
      url: siteConfig.baseUrl,
      siteName: siteConfig.name,
      images: [siteConfig.defaultImage],
      locale: "en_IN",
      type: "website",
    },
  },
  services: {
    title: "Our Internet & Networking Services | Boom Network",
    description:
      "Explore our range of services including fiber broadband, enterprise internet, leased lines, SD-WAN, and secure networking solutions.",
    alternates: { canonical: `${siteConfig.baseUrl}/services` },
  },
  about: {
    title: "About Boom Networks | Leading ISP in India",
    description:
      "Learn more about Boom Networks — India’s fast-growing ISP providing reliable connectivity and enterprise-grade broadband services.",
    alternates: { canonical: `${siteConfig.baseUrl}/about` },
  },
  contact: {
    title: "Contact Boom Networks | Get Support or Business Inquiry",
    description:
      "Need help or want to connect with Boom Networks? Contact us for broadband support, service inquiries, or business partnerships.",
    alternates: { canonical: `${siteConfig.baseUrl}/contact` },
  },
};
