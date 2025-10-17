"use client";

import { useState } from "react";
import {
  WifiHigh,
  MapPin,
  CheckCircle,
  Warning,
  MagnifyingGlass,
  Spinner,
} from "phosphor-react";
import Link from "next/link";

export default function FeasibilityPage() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState<null | {
    pincode: string;
    locality: string;
    city: string;
    state: string;
  }>(null);

  const pincodeDatabase: Record<string, { locality: string; city: string; state: string }> = {
    "110001": { locality: "Connaught Place", city: "New Delhi", state: "Delhi" },
    "201301": { locality: "Sector 62", city: "Noida", state: "Uttar Pradesh" },
    "160017": { locality: "Sector 17", city: "Chandigarh", state: "Chandigarh" },
    "400001": { locality: "Fort", city: "Mumbai", state: "Maharashtra" },
    "560001": { locality: "MG Road", city: "Bangalore", state: "Karnataka" },
  };

  const handleCheck = async () => {
    if (!pincode) return;
    setLoading(true);
    setResult(null);
    setLocationData(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const locationInfo = pincodeDatabase[pincode.trim()];
    const isAvailable = !!locationInfo;
    setResult(isAvailable);
    if (isAvailable) setLocationData({ pincode: pincode.trim(), ...locationInfo });
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => e.key === "Enter" && handleCheck();

  const coverageAreas = [
    { city: "Delhi", areas: "Connaught Place, South Delhi, North Delhi, East Delhi" },
    { city: "Noida", areas: "Sector 62, Sector 50, Sector 51, Greater Noida" },
    { city: "Chandigarh", areas: "Sector 17, Sector 22, Sector 35, Panchkula" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-orange-500 rounded-2xl shadow-lg">
              <WifiHigh size={48} weight="fill" className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
            Supercharge Your Internet Speed
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Check if our lightning-fast fiber network is available in your area.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-2">
            Find Your Connection
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Enter your PIN code to see if Boom Network is available.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Enter PIN code e.g., 110001"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 md:w-80 border border-gray-300 rounded-xl px-6 py-4 text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            />
            <button
              onClick={handleCheck}
              disabled={loading || !pincode}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-md transition-all ${
                loading || !pincode
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {loading ? (
                <>
                  <Spinner size={20} className="animate-spin" /> Checking...
                </>
              ) : (
                <>
                  <MagnifyingGlass size={22} weight="bold" /> Check Now
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {result !== null && (
            <div className="mt-12">
              {result ? (
                <div className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-10 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={64} weight="fill" className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-700 mb-2">
                    Good news! We're available in your area.
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Enjoy ultra-fast fiber and join thousands of happy customers.
                  </p>

                  {locationData && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {Object.entries(locationData).map(([key, value]) => (
                        <div key={key} className="bg-white border rounded-xl p-4 shadow-sm">
                          <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                            {key}
                          </p>
                          <p className="text-lg font-bold text-gray-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/plans"
                      className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-md transition-all"
                    >
                      View Plans
                    </Link>
                    <Link
                      href="/contact"
                      className="px-10 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-xl hover:bg-orange-50 shadow-md transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-10 text-center">
                  <div className="flex justify-center mb-4">
                    <Warning size={64} weight="fill" className="text-orange-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">
                    We’re not in your area yet.
                  </h3>
                  <p className="text-gray-600 mb-8">
                    But we’re expanding fast! Register your interest and we’ll notify you soon.
                  </p>
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 shadow-md transition-all"
                  >
                    Notify Me
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Coverage Section */}
      <section className="container mx-auto px-6 pb-28">
        <h3 className="text-center text-4xl font-extrabold text-blue-700 mb-10">
          Current Coverage Areas
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {coverageAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin
                  size={24}
                  weight="fill"
                  className={idx % 2 === 0 ? "text-blue-600" : "text-orange-500"}
                />
                <h4
                  className={`font-bold text-2xl ${
                    idx % 2 === 0 ? "text-blue-700" : "text-orange-600"
                  }`}
                >
                  {area.city}
                </h4>
              </div>
              <p className="text-gray-700">{area.areas}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
