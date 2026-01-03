// src/lib/seo.config.ts
import type { Metadata } from "next";

export const siteConfig = {
  baseUrl: "https://boomnetwork.in", 
  name: "Boom Network",
  description:
    "Affordable broadband plans with PAN India coverage. Experience high-speed fiber internet with Boom Network.",
  keywords: [
    "Boom Network",
    "ISP India",
    "Broadband",
    "Fiber Internet",
    "High-Speed Internet",
    "Internet Service Provider",
    "PAN India Broadband",
  ],
  defaultImage: "https://boomnetwork.in/og-image.jpg",
};

export const seoData: Record<string, Metadata> = {
  home: {
    title: "Boom Network | High-Speed Fiber Internet for Modern India",
    description:
      "Experience up to 1 Gbps fiber broadband with OTT bundles, enterprise solutions, and 24/7 support across India.",
    keywords:
      "fiber internet, broadband, ISP India, high-speed internet, 1 Gbps, OTT bundles, business internet",
    alternates: {
      canonical: siteConfig.baseUrl,
    },
    openGraph: {
      title: "Boom Network | High-Speed Fiber Internet",
      description:
        "Enjoy blazing-fast broadband, OTT bundles, and 24/7 support from Boom Network.",
      url: siteConfig.baseUrl,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.defaultImage }],
      locale: "en_IN",
      type: "website",
    },
  },

  services: {
    title: "Our Internet & Networking Services | Boom Network",
    description:
      "Fiber broadband, enterprise internet, leased lines, SD-WAN, and secure networking solutions.",
    alternates: {
      canonical: `${siteConfig.baseUrl}/services`,
    },
  },

  about: {
    title: "About Boom Network | Leading ISP in India",
    description:
      "Boom Network is a fast-growing ISP delivering reliable connectivity and enterprise-grade broadband services.",
    alternates: {
      canonical: `${siteConfig.baseUrl}/about`,
    },
  },

  contact: {
    title: "Contact Boom Network | Support & Business Inquiries",
    description:
      "Get in touch with Boom Network for broadband support, service inquiries, or business partnerships.",
    alternates: {
      canonical: `${siteConfig.baseUrl}/contact`,
    },
  },
};


