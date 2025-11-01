'use client';

import {
  Wifi,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Rocket,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Rocket, title: "Innovation First", description: "We're building the future of connectivity with cutting-edge technology" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and infrastructure from day one" },
    { icon: Headphones, title: "Customer-Focused", description: "Responsive support team dedicated to your success" },
    { icon: TrendingUp, title: "Scaling Fast", description: "Growing rapidly while maintaining quality and service excellence" }
  ];

  const stats = [
    { number: "2024", label: "Founded" },
    { number: "99.9%", label: "Uptime" },
    { number: "1Gbps", label: "Max Speed" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* 🟧 Background Glow Effects */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: "rgba(222, 111, 35, 0.1)" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(222, 111, 35, 0.1)",
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "1s",
        }}
      ></div>

      {/* 🟧 Hero Section */}
      <section className="relative py-24 px-6 max-w-[1500px] mx-auto text-center">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          About Us
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Revolutionizing internet connectivity with innovative technology and exceptional service
        </p>
      </section>

      {/* 📊 Stats Section */}
      <section className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#de6f23] mb-2">
              {stat.number}
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* 🧡 Our Story */}
      <section className="max-w-[1500px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We started with a simple belief: everyone deserves fast, reliable internet access. Our founders saw an opportunity to bring better connectivity to communities, building a company focused on fiber-optic technology that puts customers first.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we're on a mission to connect communities and empower homes and businesses with the internet infrastructure they need to thrive. Every connection we make is a step toward our vision of a truly connected world.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="Team collaborating on internet technology"
            className="rounded-3xl w-full h-80 object-cover shadow-xl border-4 border-[#de6f23]/30"
          />
          <div className="absolute -bottom-8 -right-8 bg-[#de6f23] text-white p-6 rounded-2xl shadow-xl">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm font-medium">Startup Energy</div>
          </div>
        </div>
      </section>

      {/* 🎯 Mission Section */}
      <section className="relative max-w-[1500px] mx-auto px-6 py-16 bg-[#de6f23]/10 rounded-3xl overflow-hidden">
        <div className="relative z-10 text-center">
          <Target className="w-10 h-10 mx-auto text-[#de6f23] mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#de6f23]">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            To disrupt the internet service industry by delivering cutting-edge fiber-optic technology with customer service that actually cares. Fast, reliable internet isn't a luxury—it's essential for modern life.
          </p>
        </div>
      </section>

      {/* 💡 Values Section */}
      <section className="max-w-[1500px] mx-auto px-6 py-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 bg-[#de6f23] rounded-xl shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-700 text-sm">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 👥 Who We Serve */}
      <section className="max-w-[1500px] mx-auto px-6 py-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Who We Serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Home Users", desc: "Stream, game, and work from home without limits." },
            { icon: Award, title: "Small Business", desc: "Reliable, scalable connectivity for startups and growing businesses." },
            { icon: Zap, title: "Remote Workers", desc: "Optimized for video calls, cloud work, and remote productivity." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center mb-4 bg-[#de6f23] rounded-xl shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍💻 Team Section */}
      <section className="relative max-w-[1500px] mx-auto px-6 py-16 rounded-3xl overflow-hidden shadow-xl border border-[#de6f23]/30">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
          alt="Our passionate startup team"
          className="w-full h-96 object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#de6f23]/60 via-transparent to-transparent flex items-end p-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Our Team
            </h2>
            <p className="text-white text-lg">
              Passionate entrepreneurs committed to revolutionizing internet connectivity
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="max-w-[1500px] mx-auto px-6 py-16 text-center flex flex-col gap-6">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #de6f23, #de6f23)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Join the Revolution
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Be part of our startup journey. We're changing internet connectivity, one connection at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#de6f23] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#c25e1e] transition"
          >
            Get Connected
          </a>
          <a
            href="/plans"
            className="border-2 border-[#de6f23] text-[#de6f23] px-10 py-4 rounded-xl font-bold hover:bg-[#de6f23]/10 transition"
          >
            Explore Plans
          </a>
        </div>
      </section>
    </main>
  );
}
