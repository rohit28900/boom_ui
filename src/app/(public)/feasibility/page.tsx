"use client";

import { useState, useEffect } from "react";
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
  const [pincodeData, setPincodeData] = useState<
    Record<string, Array<{ locality: string; city: string; state: string }>>
  >({});
  const [locations, setLocations] = useState<
    Array<{ locality: string; city: string; state: string }>
  >([]);

  // 🔹 Inline JSON Data
  const PIN_CODES = [
    { Locality: "Sector 2", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 3", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 4", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 5", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 6", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 7", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 8", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 9", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 10", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 12", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 22", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 57", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 58", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 59", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 60", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 62", Pincode: 201309, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 62A", Pincode: 201309, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 63 A", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 63", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 64", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 65", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 66", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 67", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 68", Pincode: 201307, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Sector 69", Pincode: 201301, City: "Noida", State: "Uttar Pradesh" },
    { Locality: "Ram Nagar ", Pincode: 110093, City: "Shahdhra", State: "Delhi" },
    { Locality: "Ram Nagar ", Pincode: 110032, City: "Shahdhra", State: "Delhi" },
    { Locality: "Phase 1", Pincode: 134113, City: "Panchkula", State: "Haryana" },
    { Locality: "Phase 2", Pincode: 134113, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 4", Pincode: 134112, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 8", Pincode: 134109, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 20", Pincode: 134116, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector-26 ", Pincode: 134116, City: "Panchkula", State: "Haryana" },
    { Locality: "Sector 41", Pincode: 160036, City: "Chandigarh", State: "Haryana" },
    { Locality: "Sector 91", Pincode: 140307, City: "Mohali", State: "Haryana" },
    { Locality: "kharar", Pincode: 140301, City: "Mohali", State: "Haryana" },
    { Locality: "balongi", Pincode: 160055, City: "Mohali", State: "Haryana" },
    { Locality: "sec 82", Pincode: 160059, City: "Mohali", State: "Haryana" }
  ];

  // 🔹 Map JSON Data Once
  useEffect(() => {
    const mapped: Record<
      string,
      Array<{ locality: string; city: string; state: string }>
    > = {};

    PIN_CODES.forEach((item) => {
      const pin = item.Pincode.toString();
      if (!mapped[pin]) mapped[pin] = [];
      mapped[pin].push({
        locality: item.Locality,
        city: item.City,
        state: item.State,
      });
    });

    setPincodeData(mapped);
  }, []);

  const handleCheck = async () => {
    if (!pincode) return;
    setLoading(true);
    setResult(null);
    setLocations([]);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const matches = pincodeData[pincode.trim()];
    const isAvailable = !!matches && matches.length > 0;
    setResult(isAvailable);
    if (isAvailable) setLocations(matches);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) =>
    e.key === "Enter" && handleCheck();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-2xl shadow-lg bg-orange-500">
              <WifiHigh size={48} weight="fill" className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-500">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-blue-500">
            Find Your Connection
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Enter your PIN code to see if Boom Network is available.
          </p>

          {/* Input and Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Enter PIN code e.g., 201301"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 md:w-80 border border-gray-300 rounded-xl px-6 py-4 text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                <div className="rounded-2xl p-10 text-center border-2 border-blue-500 bg-blue-50">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={64} weight="fill" className="text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-blue-500">
                    Great news! We're available in your area.
                  </h3>
                  <p className="text-gray-600 mb-6">
                    These localities are covered under this PIN:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {locations.map((loc, idx) => (
                      <div
                        key={idx}
                        className="bg-white border rounded-xl p-6 shadow-sm text-left hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={20} weight="fill" className="text-orange-500" />
                          <p className="text-lg font-bold text-gray-900">
                            {loc.locality}
                          </p>
                        </div>
                        <p className="text-gray-700">{loc.city}</p>
                        <p className="text-sm text-gray-500">{loc.state}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/plans"
                      className="px-10 py-4 text-white font-bold rounded-xl shadow-md bg-blue-500 hover:bg-blue-600"
                    >
                      View Plans
                    </Link>
                    <Link
                      href="/contact"
                      className="px-10 py-4 border-2 font-bold rounded-xl shadow-md border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl p-10 text-center border-2 border-orange-500 bg-orange-50">
                  <div className="flex justify-center mb-4">
                    <Warning size={64} weight="fill" className="text-orange-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-orange-500">
                    We’re not in your area yet.
                  </h3>
                  <p className="text-gray-600 mb-8">
                    But we’re expanding fast! Register your interest and we’ll notify you soon.
                  </p>
                  <Link
                    href="/contact"
                    className="px-10 py-4 text-white font-bold rounded-xl shadow-md bg-orange-500 hover:bg-orange-600"
                  >
                    Notify Me
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
