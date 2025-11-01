"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  MdPhone,
  MdEmail,
  MdHome,
  MdViewModule,
  MdMiscellaneousServices,
  MdInfo,
  MdContactMail,
} from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://x.com/NetworkBoo52707", label: "Twitter" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/boomnetwork3?igsh=MW5ocTQ3Z2Q2eTVxYw==",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/boom-network-397135388/",
      label: "LinkedIn",
    },
  ];

  const menuLinks = [
    { href: "/home", label: "Home", icon: MdHome },
    { href: "/plans", label: "Plans", icon: MdViewModule },
    { href: "/services", label: "Services", icon: MdMiscellaneousServices },
    { href: "/about", label: "About", icon: MdInfo },
    { href: "/contact", label: "Contact", icon: MdContactMail },
  ];

  return (
    <>
      {/* 🔸 Top Info Bar */}
      <div className="bg-black text-white py-2.5 text-sm shadow-md relative z-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left - Contact */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+918588822022"
              className="flex items-center gap-2 hover:text-white/80 transition-all group"
            >
              <MdPhone className="text-base group-hover:scale-110 transition-transform" />
              <span className="font-medium">+91 8588822022</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="mailto:info@velocitysignals.com"
              className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-all group"
            >
              <MdEmail className="text-base group-hover:scale-110 transition-transform" />
              <span>info@velocitysignals.com</span>
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs opacity-80">Follow us:</span>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-7 h-7 bg-white/20 hover:bg-white hover:text-[#de6f23] rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <social.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Main Navbar */}
      <nav className="sticky top-0 z-40 bg-white text-gray-900 border-b border-gray-200 shadow-md">
        <div className="flex justify-between items-center py-3 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Left Section */}
          <div className="flex items-center gap-10">
            {/* ✅ Logo (shifted slightly more left by removing container centering) */}
            <Link href="/home" className="flex items-center -ml-6 sm:-ml-10">
              <div className="relative w-44 h-16 sm:w-56 sm:h-20">
                <Image
                  src="/LOGO.svg"
                  alt="Boom Network"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 text-gray-900 font-medium">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative flex items-center gap-2 py-2 hover:text-[#de6f23] transition-all group"
                >
                  <link.icon className="text-base group-hover:scale-110 transition-transform" />
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#de6f23] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/feasibility"
              className="bg-[#de6f23] text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all relative group"
            >
              <span className="relative z-10">Check Availability</span>
              <div className="absolute inset-0 bg-[#c96320] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* 🔸 Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-5 space-y-3">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-900 font-medium transition-all group"
                >
                  <link.icon className="text-lg text-[#de6f23] group-hover:scale-110 transition-transform" />
                  {link.label}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/feasibility"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#de6f23] text-white font-semibold rounded-lg px-6 py-3 mt-4 hover:shadow-md transition-all"
              >
                Check Availability
              </Link>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-4 mt-5 space-y-3">
                <a
                  href="tel:+918588822022"
                  className="flex items-center gap-3 text-gray-900 hover:bg-gray-50 p-3 rounded-lg transition-all"
                >
                  <div className="bg-[#de6f23]/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <MdPhone className="text-[#de6f23] text-lg" />
                  </div>
                  +91 8588822022
                </a>
                <a
                  href="mailto:info@velocitysignals.com"
                  className="flex items-center gap-3 text-gray-900 hover:bg-gray-50 p-3 rounded-lg transition-all"
                >
                  <div className="bg-[#de6f23]/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <MdEmail className="text-[#de6f23] text-lg" />
                  </div>
                  info@velocitysignals.com
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2 font-medium">Follow us</p>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-[#de6f23] text-white flex items-center justify-center rounded-lg hover:scale-110 hover:shadow-md transition-all"
                    >
                      <social.icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
