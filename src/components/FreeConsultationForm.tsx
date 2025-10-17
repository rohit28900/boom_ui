"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { post } from "@/lib/api"; // your existing POST helper

export default function FreeConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    phone_no: "",
    email: "",
    connection_type: "home" as "home" | "business",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      await post("/api/leads", formData);
      setStatus("success");
      setFormData({
        name: "",
        state: "",
        phone_no: "",
        email: "",
        connection_type: "home",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#de6f23] mb-6 text-center">
        Get a Free Consultation
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
          required
        />
        <input
          type="text"
          placeholder="State / City"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone_no}
          onChange={(e) => setFormData({ ...formData, phone_no: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
          required
        />

        <select
          value={formData.connection_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              connection_type: e.target.value as "home" | "business",
            })
          }
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
        >
          <option value="home">Home Connection</option>
          <option value="business">Business Connection</option>
        </select>

        <textarea
          placeholder="Your message or requirements"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#de6f23] outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 bg-[#de6f23] hover:bg-[#c96320] text-white font-semibold py-3 rounded-lg transition-all"
        >
          {status === "loading" ? (
            <>
              <Send className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center justify-center gap-2 text-green-600 mt-3">
            <CheckCircle className="w-5 h-5" /> Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-red-600 mt-3">
            <AlertCircle className="w-5 h-5" /> Something went wrong. Try again.
          </div>
        )}
      </div>
    </form>
  );
}
