"use client";

import { useState, FormEvent } from "react";
import {
  Lock,
  User,
  LogIn,
  Shield,
  ArrowLeft,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Mail,
} from "lucide-react";
import api from "@/lib/api";

type Errors = {
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  general?: string;
};

export default function AdminLogin() {
  const [mode, setMode] = useState<"login" | "signup" | "change">("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if ((mode === "login" || mode === "signup" || mode === "change") && !email.trim()) {
      newErrors.email = "Email is required";
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if ((mode === "login" || mode === "signup") && !password) {
      newErrors.password = "Password is required";
    } else if (mode === "signup" && password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (mode === "change") {
      if (!newPassword) newErrors.newPassword = "New password is required";
      else if (newPassword.length < 8) newErrors.newPassword = "Password must be at least 8 characters";

      if (newPassword !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    if (mode === "signup" && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleModeChange = (newMode: "login" | "signup" | "change") => {
    setMode(newMode);
    setErrors({});
    setSuccessMessage("");
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const { data } = await api.post("/auth/auth/login", { email, password });
      
      console.log("Login Response:", data); // Debug log

      if (data.access_token) {
        // Set cookie with proper configuration
        const maxAge = 60 * 60 * 24; // 24 hours in seconds
        document.cookie = `authToken=${data.token}; path=/; max-age=${maxAge}; SameSite=Lax`;
        
        console.log("Cookie after setting:", document.cookie); // Debug log
        
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/admin";
        }, 1000);
      } else {
        setErrors({ general: "No token received from server" });
      }
    } catch (err: any) {
      console.error("Login Error:", err);
      setErrors({ 
        general: err.response?.data?.message || err.message || "Login failed" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccessMessage("Account created successfully! Please login.");
      handleModeChange("login");
    } catch (err: any) {
      setErrors({ general: "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccessMessage("Password changed successfully! Please login with new password.");
      handleModeChange("login");
    } catch (err: any) {
      setErrors({ general: "Failed to change password. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler =
    mode === "login" ? handleLogin : mode === "signup" ? handleSignup : handleChangePassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="relative">
                <img
                  src="/boom_w.png"
                  alt="Company Logo"
                  className="h-34 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "text-4xl font-black bg-gradient-to-r from-[#de6f23] to-[#de6f23] bg-clip-text text-transparent";
                    fallback.textContent = "ADMIN";
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
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
              Secure authentication platform designed for modern enterprises.
              Protect your organization with industry-leading security standards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#de6f23]/20 to-[#de6f23]/20 rounded-lg flex items-center justify-center border border-[#de6f23]/30">
                <Lock className="w-5 h-5 text-[#de6f23]" />
              </div>
              <h3 className="font-semibold text-white">Bank-Level Security</h3>
              <p className="text-sm text-gray-400">256-bit encryption for all data</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg flex items-center justify-center border border-gray-600/50">
                <Shield className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="font-semibold text-white">Multi-Factor Auth</h3>
              <p className="text-sm text-gray-400">Enhanced protection layer</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#de6f23] to-[#de6f23] px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              {mode === "login" && "Sign In"}
              {mode === "signup" && "Create Account"}
              {mode === "change" && "Change Password"}
            </h2>
            <p className="text-[#f9d6b9] text-sm mt-1">
              {mode === "login" && "Access your admin dashboard"}
              {mode === "signup" && "Register for a new account"}
              {mode === "change" && "Set your new password"}
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

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@boomnetwork.in"
                  className={`w-full pl-11 pr-4 py-2.5 bg-gray-700/50 border ${
                    errors.email
                      ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500"
                      : "border-gray-600 focus:ring-[#de6f23] focus:border-[#de6f23]"
                  } rounded-lg focus:outline-none focus:ring-2 transition-colors text-white placeholder-gray-500`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            {(mode === "login" || mode === "signup") && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={`w-full pl-11 pr-11 py-2.5 bg-gray-700/50 border ${
                      errors.password
                        ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500"
                        : "border-gray-600 focus:ring-[#de6f23] focus:border-[#de6f23]"
                    } rounded-lg focus:outline-none focus:ring-2 transition-colors text-white placeholder-gray-500`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </p>
                )}
              </div>
            )}

            {/* New / Confirm Password */}
            {mode === "change" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className={`w-full pl-11 pr-11 py-2.5 bg-gray-700/50 border ${
                        errors.newPassword
                          ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500"
                          : "border-gray-600 focus:ring-[#de6f23] focus:border-[#de6f23]"
                      } rounded-lg focus:outline-none focus:ring-2 transition-colors text-white placeholder-gray-500`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.newPassword}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className={`w-full pl-11 pr-4 py-2.5 bg-gray-700/50 border ${
                        errors.confirmPassword
                          ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500"
                          : "border-gray-600 focus:ring-[#de6f23] focus:border-[#de6f23]"
                      } rounded-lg focus:outline-none focus:ring-2 transition-colors text-white placeholder-gray-500`}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Remember Me / Change Password */}
            {mode === "login" && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#de6f23] bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-[#de6f23]"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleModeChange("change")}
                  className="text-sm font-medium text-[#de6f23] hover:text-[#de6f23]/80 transition-colors"
                >
                  Change password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#de6f23] to-[#de6f23] hover:from-[#de6f23]/90 hover:to-[#de6f23]/90 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#de6f23]/40 disabled:from-gray-600 disabled:to-gray-700 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
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
                  {mode === "login" && (
                    <>
                      <LogIn className="w-5 h-5" /> Sign In
                    </>
                  )}
                  {mode === "signup" && (
                    <>
                      <User className="w-5 h-5" /> Sign Up
                    </>
                  )}
                  {mode === "change" && (
                    <>
                      <CheckCircle className="w-5 h-5" /> Update Password
                    </>
                  )}
                </>
              )}
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-400">
              {mode === "login" && (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => handleModeChange("signup")}
                    className="text-[#de6f23] hover:text-[#de6f23]/80 font-medium"
                    type="button"
                  >
                    Create one
                  </button>
                </>
              )}
              {mode === "signup" && (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => handleModeChange("login")}
                    className="text-[#de6f23] hover:text-[#de6f23]/80 font-medium"
                    type="button"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>

          <p className="text-center text-gray-500 text-sm py-4">
            © {new Date().getFullYear()} Boom Motors. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
}