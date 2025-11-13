"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

// const API_URL = "http://localhost:8000/leads/leads/";
const API_URL = "https://web-production-71f8b.up.railway.app"


const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands", "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry"
];

const plans = ["Home", "Business"];

export default function PlanInquiryModal({ image = "/images/plan-inquiry.jpg" }: { image?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone_no: "",
    email: "",
    connection_type: "home", // Home/Business -> lowercase
    state: "",
    source: "website",
    status: "new",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("API error:", res.status, text);
        throw new Error("API error");
      }

      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setForm({
          name: "",
          phone_no: "",
          email: "",
          connection_type: "home",
          state: "",
          source: "website",
          status: "new",
        });
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-50">
      <div className="bg-white w-[90%] max-w-3xl shadow-2xl flex overflow-hidden rounded-none">
        
        {/* Left Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src={image}
            alt="Plan Inquiry"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#de6f23]/30 backdrop-blur-[1px]" />
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-md">
            Plan Inquiry
          </h2>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-[#de6f23]"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-2xl font-semibold text-[#de6f23] mb-4 text-center">
            Plan Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#de6f23]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#de6f23]"
              value={form.phone_no}
              onChange={(e) => setForm({ ...form, phone_no: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#de6f23]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <select
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#de6f23]"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              required
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#de6f23]"
              value={form.connection_type}
              onChange={(e) => setForm({ ...form, connection_type: e.target.value })}
            >
              {plans.map((p) => (
                <option key={p} value={p.toLowerCase()}>{p}</option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-[#de6f23] hover:bg-[#c7631f] text-white py-2 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>

          {status === "success" && (
            <p className="flex items-center justify-center mt-4 text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" /> Inquiry sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center justify-center mt-4 text-red-600">
              <AlertCircle className="w-5 h-5 mr-2" /> Failed to send inquiry.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
