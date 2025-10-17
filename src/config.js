// config.js - Centralized configuration for site-wide settings

const siteConfig = {
  // Company Information
  company: {
    name: "Boom Networks",
    legalName: "Boom Networks Pvt. Ltd.",
    tagline: "Fast, Reliable Internet Solutions",
  },

  // Contact Information
  contact: {
    phone: {
      primary: "+91 8588822022",
      display: "+91 8588822022",
      href: "tel:+918588822022",
    },
    email: {
      sales: "sales@velocitysignals.com",
      support: "support@velocitysignals.com",
      info: "info@velocitysignals.com",
    },
    // Two Addresses
    address1: {
      label: "Corporate Office",
      street: "Office no 1105, 11th floor, Iconic Tower, Sector 62",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201309",
      country: "India",
    },
    address2: {
      label: "Branch Office",
      street: "Plot 23, 2nd Floor, Business Plaza, MG Road",
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122001",
      country: "India",
    },
  },

  // Social Media Links
  social: {
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61582306826626",
      username: "@boomnetwork",
      enabled: true,
    },
    twitter: {
      url: "https://x.com/NetworkBoo52707",
      username: "@NetworkBoo52707",
      enabled: true,
    },
    instagram: {
      url: "https://www.instagram.com/boomnetwork3?igsh=MW5ocTQ3Z2Q2eTVxYw==",
      username: "@boomnetwork3",
      enabled: true,
    },
    linkedin: {
      url: "https://www.linkedin.com/in/boom-network-397135388/",
      username: "boom-network",
      enabled: true,
    },
    youtube: {
      url: "https://youtube.com/@boomnetwork",
      username: "@boomnetwork",
      enabled: false,
    },
    whatsapp: {
      number: "+918588822022",
      url: "https://wa.me/918588822022",
      enabled: false,
    },
  },

  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
    timezone: "IST (Indian Standard Time)",
  },

  // SEO & Meta Information
  seo: {
    title: "Boom Networks - Fast & Reliable Internet Service Provider",
    description: "Get high-speed internet with Boom Networks. Affordable plans, 24/7 support, and reliable connectivity for homes and businesses.",
    keywords: ["internet service provider", "broadband", "fiber internet", "ISP", "high-speed internet"],
    ogImage: "/og-image.jpg",
  },

  // Navigation Links
  navigation: {
    main: [
      { href: "/home", label: "Home" },
      { href: "/plans", label: "Plans" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    footer: {
      company: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/blog", label: "Blog" },
        { href: "/press", label: "Press Kit" },
      ],
      support: [
        { href: "/help", label: "Help Center" },
        { href: "/contact", label: "Contact Support" },
        { href: "/faq", label: "FAQ" },
        { href: "/status", label: "Service Status" },
      ],
      legal: [
        { href: "/terms", label: "Terms of Service" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/refund-policy", label: "Refund Policy" },
        { href: "/fair-usage", label: "Fair Usage Policy" },
      ],
    },
  },

  // Feature Flags
  features: {
    chatSupport: false,
    onlinePayments: true,
    serviceAreaCheck: true,
    customerPortal: true,
  },

  // Third-party Service IDs
  services: {
    googleAnalytics: "G-XXXXXXXXXX",
    facebookPixel: "XXXXXXXXXXXXXX",
    googleMaps: "YOUR_GOOGLE_MAPS_API_KEY",
  },
};

export default siteConfig;
