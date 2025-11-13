"use client";

import { useState, FormEvent } from "react";
import {
  Lock,
  LogIn,
  Shield,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Errors = {
  email?: string;
  password?: string;
  general?: string;
};

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // ✅ Use your local FastAPI server
      const res = await axios.post(
        "http://localhost:8000/auth/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", res.data);
      if (res.status === 200 && res.data.access_token) {
        localStorage.setItem("token", res.data.access_token);
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => router.push("/admin/dashboard"), 1000);
      } else {
        setErrors({ general: "Invalid credentials" });
      }
    } catch (err: any) {
      setErrors({
        general:
          err.response?.data?.detail || "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="relative">
                <img
                  src="/boom_w.png"
                  alt="Company Logo"
                  className="h-34 w-auto object-contain"
                />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Admin Portal
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Enterprise-Grade
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#de6f23] to-[#de6f23]">
                Access Control
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              Secure authentication platform for Boom Network. Protect your
              network with industry-grade login protection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#de6f23]/20 rounded-lg flex items-center justify-center border border-[#de6f23]/30">
                <Lock className="w-5 h-5 text-[#de6f23]" />
              </div>
              <h3 className="font-semibold text-white">High Security</h3>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-600/50">
                <Shield className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="font-semibold text-white">Admin Control</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#de6f23] to-[#de6f23] px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Sign In</h2>
            <p className="text-[#f9d6b9] text-sm mt-1">
              Access your admin dashboard
            </p>
          </div>

          <div className="p-8 space-y-5">
            {errors.general && (
              <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-300">{errors.general}</p>
              </div>
            )}

            {successMessage && (
              <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-300">{successMessage}</p>
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@boomnetwork.in"
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 focus:ring-[#de6f23] rounded-lg text-white"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-11 py-2.5 bg-gray-700/50 border border-gray-600 focus:ring-[#de6f23] rounded-lg text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#de6f23] to-[#de6f23] text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#de6f23]/30 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" /> Sign In
                </>
              )}
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm py-4">
            © {new Date().getFullYear()} Boom Network. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
}
