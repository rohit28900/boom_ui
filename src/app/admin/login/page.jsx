"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, LogIn, Shield, Mail, ArrowLeft, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { post } from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (mode === "login" || mode === "signup") {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format";
      }
    }
    
    if (mode === "signup" || mode === "change") {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format";
      }
    }
    
    if (mode === "login" || mode === "signup") {
      if (!password) {
        newErrors.password = "Password is required";
      } else if (mode === "signup" && password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }
    
    if (mode === "change") {
      if (!newPassword) {
        newErrors.newPassword = "New password is required";
      } else if (newPassword.length < 8) {
        newErrors.newPassword = "Password must be at least 8 characters";
      }
      
      if (newPassword !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    
    if (mode === "signup" && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleLogin(e) {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const response = await post("/auth/auth/login", {
        email,
        password,
      });
      
      if (response.token) {
        localStorage.setItem("authToken", response.token);
      }
      
      router.push("/admin");
    } catch (error) {
      setErrors({ general: error.data?.message || error.message || "Invalid credentials. Please try again." });
      setIsLoading(false);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const response = await post("/auth/signup", {
        username,
        email,
        password,
      });
      
      alert("Account created successfully! Please login.");
      setMode("login");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    } catch (error) {
      setErrors({ general: error.data?.message || error.message || "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const response = await post("/auth/change-password", {
        email,
        newPassword,
      });
      
      alert("Password changed successfully! Please login with your new password.");
      setMode("login");
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setErrors({});
    } catch (error) {
      setErrors({ general: error.data?.message || error.message || "Failed to change password. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setErrors({});
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Company Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-gray-800">Admin Portal</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Enterprise-Grade
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Access Control
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Secure authentication platform designed for modern enterprises. 
              Protect your organization with industry-leading security standards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Bank-Level Security</h3>
              <p className="text-sm text-gray-600">256-bit encryption for all data</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Multi-Factor Auth</h3>
              <p className="text-sm text-gray-600">Enhanced protection layer</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
              <div className="lg:hidden flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Admin Portal</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white">
                {mode === "login" && "Sign In"}
                {mode === "signup" && "Create Account"}
                {mode === "change" && "Change Password"}
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                {mode === "login" && "Access your admin dashboard"}
                {mode === "signup" && "Register for a new account"}
                {mode === "change" && "Set your new password"}
              </p>
            </div>

            {/* Form Body */}
            <div className="p-8">
              {mode !== "login" && (
                <button
                  onClick={() => handleModeChange("login")}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </button>
              )}

              {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800">{errors.general}</p>
                </div>
              )}

              <div className="space-y-5">
                
                {/* Email Field */}
                {(mode === "login" || mode === "signup" || mode === "change") && (
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full pl-11 pr-4 py-2.5 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900`}
                        placeholder="name@company.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                )}

                {/* Password Field */}
                {(mode === "login" || mode === "signup") && (
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full pl-11 pr-11 py-2.5 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.password}
                      </p>
                    )}
                  </div>
                )}

                {/* New Password Field - Change Password Mode */}
                {mode === "change" && (
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={`w-full pl-11 pr-11 py-2.5 border ${errors.newPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900`}
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.newPassword && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.newPassword}
                      </p>
                    )}
                  </div>
                )}

                {/* Confirm Password */}
                {(mode === "signup" || mode === "change") && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full pl-11 pr-4 py-2.5 border ${errors.confirmPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900`}
                        placeholder="Confirm your password"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {/* Remember Me & Change Password */}
                {mode === "login" && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleModeChange("change")}
                      className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      Change password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={mode === "login" ? handleLogin : mode === "signup" ? handleSignup : handleChangePassword}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      {mode === "login" && <><LogIn className="w-5 h-5" /> Sign In</>}
                      {mode === "signup" && <><CheckCircle className="w-5 h-5" /> Create Account</>}
                      {mode === "change" && <><Lock className="w-5 h-5" /> Change Password</>}
                    </>
                  )}
                </button>

                {/* Mode Switch */}
                {mode === "login" && (
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => handleModeChange("signup")}
                        className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                Protected by enterprise-grade security • <a href="#" className="text-orange-600 hover:text-orange-700">Terms</a> • <a href="#" className="text-orange-600 hover:text-orange-700">Privacy</a>
              </p>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Need assistance? <a href="#" className="font-medium text-orange-600 hover:text-orange-700">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}