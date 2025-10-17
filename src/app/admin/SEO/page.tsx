"use client";

import { BarChart3, TrendingUp, Settings } from "lucide-react";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* SEO Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">SEO Management</h1>
            <p className="text-gray-600 font-medium">
              Track performance, manage keywords, and optimize visibility.
            </p>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:opacity-90 transition">
            <Settings className="inline-block w-4 h-4 mr-2" />
            Settings
          </button>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-800">Traffic Growth</h2>
            </div>
            <p className="text-3xl font-black text-gray-900 mt-4">+12%</p>
            <p className="text-sm text-gray-500 mt-1">vs last month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-800">Keyword Ranking</h2>
            </div>
            <p className="text-3xl font-black text-gray-900 mt-4">42</p>
            <p className="text-sm text-gray-500 mt-1">keywords in top 10</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-800">Backlinks</h2>
            </div>
            <p className="text-3xl font-black text-gray-900 mt-4">230</p>
            <p className="text-sm text-gray-500 mt-1">new backlinks this month</p>
          </div>
        </div>

        {/* Keyword Management Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Keyword Management
          </h2>
          <p className="text-gray-600 mb-6">
            Add, edit, or remove SEO keywords for tracking and optimization.
          </p>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500">
              🔧 API Integration Point: Connect your SEO service or Google Search Console data here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
