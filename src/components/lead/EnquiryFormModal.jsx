"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, User, MapPin, Home, Zap, ShieldCheck, Activity } from 'lucide-react';

export default function EnquiryForm({ isOpen, onClose, selectedPlan = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    plan: selectedPlan || '100MBPS'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Network Latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white relative w-full max-w-lg overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-100"
          >
            {/* 🛠️ Technical Header */}
            <div className="bg-slate-900 p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#de6f23] p-2">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#de6f23]">
                  Provisioning Request
                </span>
              </div>
              
              <h2 className="text-3xl font-[1000] text-white tracking-tighter uppercase leading-none italic">
                Get <span className="text-[#de6f23]">Provisioned.</span>
              </h2>
              <p className="text-slate-400 text-xs mt-4 font-medium uppercase tracking-widest opacity-60">
                Register your node for high-speed fiber deployment
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase mb-2">Request Logged</h3>
                  <p className="text-slate-500 font-medium text-sm italic">
                    Our technical team will contact you within 24 operational hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid for Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <User size={12} className="text-[#de6f23]" /> Full Name
                      </label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 font-bold focus:border-[#de6f23] outline-none transition-all"
                        placeholder="e.g., ADITYA SINGH"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Phone size={12} className="text-[#de6f23]" /> Contact
                      </label>
                      <input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 font-bold focus:border-[#de6f23] outline-none transition-all"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  {/* Email & Plan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Mail size={12} className="text-[#de6f23]" /> Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 font-bold focus:border-[#de6f23] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Activity size={12} className="text-[#de6f23]" /> Speed Tier
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 font-bold focus:border-[#de6f23] outline-none appearance-none cursor-pointer"
                      >
                        <option value="100MBPS">100 MBPS</option>
                        <option value="150MBPS">150 MBPS</option>
                        <option value="200MBPS">200 MBPS</option>
                        <option value="300MBPS">300 MBPS</option>
                        <option value="500MBPS">500 MBPS</option>
                      </select>
                    </div>
                  </div>

                  {/* Address Area */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <MapPin size={12} className="text-[#de6f23]" /> Installation Address
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 font-bold focus:border-[#de6f23] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-slate-900 text-white py-5 px-6 overflow-hidden transition-all active:scale-95"
                  >
                    <div className="absolute inset-0 w-1 bg-[#de6f23] group-hover:w-full transition-all duration-500" />
                    <span className="relative z-10 text-[11px] font-[1000] uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                      {isSubmitting ? 'Initializing...' : 'Initialize Connection'}
                      <Zap size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                    </span>
                  </button>

                  <div className="flex items-center justify-between opacity-40">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
                      AES-256 Encrypted Connection
                    </p>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce" />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}