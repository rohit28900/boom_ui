'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';
import api from '@/lib/api'; // your axios instance

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
    if (!formData.name || !formData.phone_no || !formData.email || !formData.state) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        name: formData.name,
        state: formData.state,
        phone_no: formData.phone_no,
        email: formData.email,
        source: 'Website',
        connection_type: formData.connection_type,
        status: 'new',
        message: formData.message
      };

      await api.post('/leads/leads/', payload);

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
      {/* Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(222, 111, 35, 0.1)' }}></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(222, 111, 35, 0.1)', animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }}></div>

      {/* Header */}
      <header className="relative pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #de6f23, #de6f23)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
          Contact us
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Connect with India's leading fiber broadband provider. Get a response within 24 hours.
        </p>
      </header>

      <div className="relative max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <section className="lg:col-span-2">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl shadow-lg" style={{ backgroundColor: '#de6f23' }}>
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#de6f23' }}>Request Broadband Connection</h2>
            </div>

            <div className="space-y-6">
              {/* Name + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2" />
                <input name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Phone Number" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2" />
              </div>

              {/* Email + State */}
              <div className="grid md:grid-cols-2 gap-6">
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2" />
                <select name="state" value={formData.state} onChange={handleChange} className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2">
                  <option value="">Select State</option>
                  {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
              </div>

              {/* Connection Type */}
              <select name="connection_type" value={formData.connection_type} onChange={handleChange} className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2">
                <option value="home">Home Broadband</option>
                <option value="business">Business Broadband</option>
              </select>

              {/* Message */}
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Additional Requirements" className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:ring-2" />

              {submitStatus && (
                <div className={`flex items-center gap-2 p-4 rounded-xl border ${submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                  {submitStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <span>{submitStatus === 'success' ? "Request submitted successfully!" : "Something went wrong."}</span>
                </div>
              )}

              <button onClick={handleSubmit} disabled={isSubmitting} className="w-full text-white font-bold rounded-xl px-6 py-4 shadow-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#de6f23' }}>
                {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5" /> Submit Request</>}
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact Info */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#de6f23' }}>Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#de6f23]" />
                <a href="mailto:info@velocitysignals.com" className="text-gray-900 text-sm font-medium hover:text-[#de6f23]">info@velocitysignals.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#de6f23]" />
                <a href="tel:+918588822022" className="text-gray-900 text-sm font-medium hover:text-[#de6f23]">+91 8588822022</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#de6f23]" />
                <p className="text-gray-900 text-sm font-medium">Mon - Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </section>

          {/* Office Locations */}
<section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
  <h2 className="text-xl font-bold mb-5" style={{ color: '#de6f23' }}>
    Our Office Locations
  </h2>

  <div className="space-y-6">

    {/* Head Office */}
    <article className="grid grid-cols-5 gap-4">
      <div className="col-span-2 space-y-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-[#de6f23]" />
          <span className="font-semibold text-xs text-gray-700">Head Office</span>
        </div>
        <p className="text-gray-600 text-xs">
          1/3437 Ramnagar exth mandoli road, Shahdara, Delhi 110032
        </p>
      </div>
      <div className="col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4573788675795!2d77.29458647549863!3d28.682569575643384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0e8c8c8c8d%3A0x1234567890abcdef!2sElectronic%20City%20Metro%20Station!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="160"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Head Office"
        ></iframe>
      </div>
    </article>

    {/* Corporate Office */}
    <article className="grid grid-cols-5 gap-4">
      <div className="col-span-2 space-y-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-[#de6f23]" />
          <span className="font-semibold text-xs text-gray-700">Corporate Office</span>
        </div>
        <p className="text-gray-600 text-xs">
          Office no 1105, Iconic Tower, Sector 62, Noida, UP 201309
        </p>
      </div>
      <div className="col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2850474485863!2d77.36258977549673!3d28.627015575669733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456f3e8123%3A0x9876543210fedcba!2sIconic%20Tower%20Noida!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="160"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Corporate Office"
        ></iframe>
      </div>
    </article>

  </div>
</section>


          {/* 24-Hour Response */}
          <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(222, 111, 35, 0.1)', borderWidth: '1px', borderColor: 'rgba(222, 111, 35, 0.3)' }}>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#de6f23' }}>
              <Globe className="w-5 h-5" />
              24-Hour Response Time
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our dedicated customer service team responds to all broadband connection inquiries within 24 hours. For urgent technical support, call us directly.
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
