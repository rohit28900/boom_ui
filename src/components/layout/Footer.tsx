"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";
import Image from "next/image";
import siteConfig from "@/config";

type SocialPlatform = "facebook" | "twitter" | "instagram" | "linkedin" | "youtube" | "whatsapp";

interface SocialLink {
  url: string;
  enabled: boolean;
}

interface NavLink {
  href: string;
  label: string;
}

export default function Footer() {
  const socialIcons: Record<SocialPlatform, React.ReactNode> = {
    facebook: <FaFacebookF className="text-base" />,
    twitter: <span className="font-bold text-xs">X</span>,
    instagram: <FaInstagram className="text-base" />,
    linkedin: <FaLinkedinIn className="text-base" />,
    youtube: <FaYoutube className="text-base" />,
    whatsapp: <FaWhatsapp className="text-base" />,
  };

  const activeSocialLinks = (Object.entries(siteConfig.social) as [SocialPlatform, SocialLink][])
    .filter(([_, social]) => social.enabled)
    .map(([platform, social]) => ({
      href: social.url,
      icon: socialIcons[platform],
      label: platform.charAt(0).toUpperCase() + platform.slice(1),
    }));

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-46 h-34">
              <Image
                src="/boom_w.png"
                alt={siteConfig.company.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.company.tagline || "Experience next-generation high-speed fiber broadband across India. Reliable, affordable internet solutions for homes and businesses."}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href={siteConfig.contact.phone.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MdPhone className="text-orange-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="text-white font-medium">{siteConfig.contact.phone.display}</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.contact.email.info}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MdEmail className="text-orange-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="text-white font-medium text-sm break-all">{siteConfig.contact.email.info}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links & Support */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
                Quick Links
                <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {siteConfig.navigation.main.map((link: NavLink, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group text-sm">
                      <MdArrowForward className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
                Support
                <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {siteConfig.navigation.footer.support.map((link: NavLink, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group text-sm">
                      <MdArrowForward className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Offices */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
              Connect
              <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {activeSocialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                   className="w-11 h-11 bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
                  <span className="text-gray-300 group-hover:text-white transition-colors">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              {/* Office 1 */}
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-orange-400 text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm mb-1">Head Office</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {siteConfig.contact.address2.street}<br />
                    {siteConfig.contact.address2.city}, {siteConfig.contact.address2.state}<br />
                    {siteConfig.contact.address2.pincode}
                  </p>
                </div>
              </div>

              {/* Office 2 */}
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-orange-400 text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm mb-1">Corporate Office</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {siteConfig.contact.address1.street}<br />
                    {siteConfig.contact.address1.city}, {siteConfig.contact.address1.state}<br />
                    {siteConfig.contact.address1.pincode}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="font-medium text-white text-sm mb-2">Business Hours</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>Mon-Fri: {siteConfig.businessHours.weekdays}</p>
                  <p>Saturday: {siteConfig.businessHours.saturday}</p>
                  <p>Sunday: {siteConfig.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-medium">{siteConfig.company.name}</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {siteConfig.navigation.footer.legal.map((link: NavLink, idx: number) => (
                <a key={idx} href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
