"use client";

import { useState } from "react";
import { Users, TrendingUp, FileText } from "lucide-react";
import LeadsPage from "./leads/page";
import ContentPage from "./content/page";

// --- SEO Tab Component ---
function SEOTab() {
  // API Integration Point
  // const [seoData, setSeoData] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   fetchSEOData();
  // }, []);
  
  // const fetchSEOData = async () => {
  //   try {
  //     const response = await fetch('/api/seo/dashboard');
  //     const data = await response.json();
  //     setSeoData(data);
  //   } catch (error) {
  //     console.error('Failed to fetch SEO data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Mock data for demonstration
  const mockStats = {
    totalKeywords: 156,
    avgPosition: 12.4,
    impressions: 45200
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Keywords" 
          value={mockStats.totalKeywords}
          trend="+8.2%"
          trendUp={true}
        />
        <StatCard 
          title="Avg. Position" 
          value={mockStats.avgPosition.toFixed(1)}
          trend="-2.3"
          trendUp={true}
        />
        <StatCard 
          title="Monthly Impressions" 
          value={mockStats.impressions.toLocaleString()}
          trend="+15.4%"
          trendUp={true}
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Keyword Rankings</h3>
        <div className="space-y-3">
          {[
            { keyword: "best marketing tools", position: 3, change: 2 },
            { keyword: "digital marketing guide", position: 7, change: -1 },
            { keyword: "seo optimization tips", position: 12, change: 5 }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">{item.keyword}</span>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-orange-600">#{item.position}</span>
                <span className={`text-sm font-semibold ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change > 0 ? '↑' : '↓'} {Math.abs(item.change)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Stat Card Component ---
function StatCard({ title, value, trend, trendUp }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <p className="text-sm font-semibold text-gray-600 mb-2">{title}</p>
      <p className="text-3xl font-black text-gray-900 mb-2">{value}</p>
      {trend && (
        <p className={`text-sm font-semibold ${trendUp ? 'text-green-600' : 'text-gray-600'}`}>
          {trendUp && '↑ '}{trend}
        </p>
      )}
    </div>
  );
}

// --- Leads Tab (renders your actual LeadsPage) ---
function LeadsTab() {
  return <LeadsPage />;
}

// --- Content Tab (renders your actual ContentPage) ---
function ContentTab() {
  return <ContentPage />;
}

// --- Main Admin Dashboard Component ---
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");

  const tabs = [
    {
      id: "leads",
      label: "Leads",
      icon: Users,
      component: LeadsTab,
    },
    {
      id: "seo",
      label: "SEO",
      icon: TrendingUp,
      component: SEOTab,
    },
    {
      id: "content",
      label: "Content",
      icon: FileText,
      component: ContentTab,
    },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || LeadsTab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with Logo and Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="text-white font-black text-xl">A</span>';
                  }}
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-black text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Manage your business
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="px-4 md:px-8">
            <div className="flex gap-2 overflow-x-auto pb-px">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-bold text-sm whitespace-nowrap transition-all relative ${
                      isActive
                        ? "text-orange-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
        <div className="transition-all duration-300">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}