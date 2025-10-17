'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { post } from '@/lib/api';

type FormData = {
  name: string;
  state: string;
  phone_no: string;
  email: string;
  connection_type: 'home' | 'business';
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    state: '',
    phone_no: '',
    email: '',
    connection_type: 'home',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const apiData = { ...formData, source: 'website', status: 'new' };
      await post('/leads/leads/', apiData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        state: '',
        phone_no: '',
        email: '',
        connection_type: 'home',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const indianStates = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
    "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
    "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
    "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
    "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#de6f23]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#de6f23]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#de6f23] to-orange-500 bg-clip-text text-transparent">
            Get Connected Today
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience lightning-fast fiber broadband. Fill out the form and our team will reach out within 24 hours.
          </p>
        </div>
      </div>

      {/* Form + Contact Info */}
      <div className="relative max-w-[1500px] mx-auto px-6 pb-20 grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-white relative overflow-hidden p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl">
            {/* Decorative Background Image */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10 rotate-12 pointer-events-none">
              <img src="/connection-bg.svg" alt="Connection" className="w-full h-full object-contain" />
            </div>

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-gradient-to-r from-[#de6f23] to-orange-600 p-3 rounded-xl flex-shrink-0 shadow-lg hover:scale-110 transition-transform">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#de6f23] relative z-10">Request Connection</h2>
            </div>

            <p className="text-gray-600 mb-8 relative z-10">
              Fill in your details and we'll help you get started with high-speed internet.
            </p>

            <div className="space-y-6 relative z-10">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Phone Number *", name: "phone_no", type: "tel", placeholder: "+91 98765 43210" }
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">{field.label}</label>
                    <input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#de6f23] focus:border-transparent transition"
                    />
                  </div>
                ))}
              </div>

              {/* Email & State */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#de6f23] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de6f23] focus:border-transparent transition"
                  >
                    <option value="">Select State</option>
                    {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
              </div>

              {/* Connection Type */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Connection Type *</label>
                <select
                  name="connection_type"
                  value={formData.connection_type}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de6f23] focus:border-transparent transition"
                >
                  <option value="home">Home</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Additional Notes (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions..."
                  className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#de6f23] focus:border-transparent transition"
                />
              </div>

              {/* Submit Feedback */}
              {submitStatus && (
                <div className={`flex items-center gap-2 p-4 rounded-xl border ${
                  submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  {submitStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <span className="font-medium">
                    {submitStatus === 'success'
                      ? "Request submitted successfully! We'll contact you soon."
                      : "Something went wrong. Please try again."}
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#de6f23] to-orange-600 text-white font-bold rounded-xl px-6 py-4 hover:from-orange-600 hover:to-[#de6f23] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-[#de6f23]/50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Submit Request
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Email & Phone */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-[#de6f23] mb-4">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email Us", value: "sales@velocitysignals.com", href: "mailto:sales@velocitysignals.com" },
                { icon: Phone, label: "Call Us", value: "+91 8588822022", href: "tel:+918588822022" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="bg-[#de6f23]/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-[#de6f23]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <a href={item.href} className="text-gray-900 hover:text-[#de6f23] transition text-sm font-medium">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-[#de6f23] mb-4">Office Locations</h3>
            <div className="space-y-4">
              {[
                { title: "Head Office", address: "1/3437 Ramnagar exth mandoli road shahdara\n Near Electronic city metro station \nDelhi 110032" },
                { title: "Corporate Office", address: "Office no 1105, 11th floor, Iconic Tower, Sector 62\nNoida, Uttar Pradesh, 201309" }
              ].map((office, i) => (
                <div key={i} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#de6f23] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{office.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-[#de6f23]/10 p-6 rounded-2xl border border-[#de6f23]/30">
            <h3 className="text-lg font-bold text-[#de6f23] mb-2">Quick Response</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our team typically responds to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
