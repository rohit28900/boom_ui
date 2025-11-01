"use client";

import { useState } from "react";
import { Users, TrendingUp, FileText, LogOut, Settings, User, ChevronDown } from "lucide-react";
import LeadsPage from "./leads/page";
import ContentPage from "./content/page";

// --- SEO Tab Component ---
function SEOTab() {
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
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-orange-300 transition-all">
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

// --- Leads Tab Component ---
function LeadsTab() {
  return <LeadsPage />;
}

// --- User Dropdown Menu Component ---
function UserDropdown({ isOpen, setIsOpen }) {
  const handleSignOut = () => {
    // Clear any auth tokens or session data
    localStorage.clear();
    sessionStorage.clear();
    
    // Redirect to admin login page
    window.location.href = '/admin/login';
  };

  // const handleSettings = () => {
  //   console.log("Opening settings...");
  //   alert("Settings functionality");
  // };

  const handleProfile = () => {
    console.log("Opening profile...");
    alert("Profile functionality");
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">Admin User</p>
        <p className="text-xs text-gray-500 truncate">admin@example.com</p>
      </div>
      
      <button
        onClick={handleProfile}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
      >
        <User className="w-4 h-4" />
        <span className="font-medium">My Profile</span>
      </button>
      
      {/* <button
        onClick={handleSettings}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
      >
        <Settings className="w-4 h-4" />
        <span className="font-medium">Settings</span>
      </button> */}
      
      <div className="border-t border-gray-100 mt-2 pt-2">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

// --- Main Admin Dashboard Component ---
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    {
      id: "leads",
      label: "Leads",
      icon: Users,
      component: LeadsTab,
    },
    // {
    //   id: "seo",
    //   label: "SEO",
    //   icon: TrendingUp,
    //   component: SEOTab,
    // },
    // {
    //   id: "content",
    //   label: "Content",
    //   icon: FileText,
    //   component: ContentTab,
    // },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || LeadsTab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with Logo and Tabs */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 sticky top-0 z-40 shadow-lg">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/boom_w.png"
                  alt="Logo"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className = "text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent";
                    fallback.textContent = "ADMIN";
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>
              <div className="hidden md:block border-l-2 border-orange-500 pl-4">
                <h1 className="text-xl font-black bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  Manage your business
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 hover:bg-gray-800 rounded-lg px-3 py-2 transition-colors"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-white">Admin User</p>
                  <p className="text-xs text-gray-400">admin@example.com</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-orange-400/30">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <UserDropdown isOpen={dropdownOpen} setIsOpen={setDropdownOpen} />
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
                        ? "text-orange-500"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/50"></div>
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

      {/* Click outside to close dropdown */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
}