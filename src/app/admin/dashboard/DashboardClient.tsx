"use client";

import { useState, JSX } from "react";
import { Users, TrendingUp, LogOut, User, ChevronDown, X } from "lucide-react";
import LeadsPage from "../leads/page";
import PlansPage from "../Plan/page";
import { useRouter } from "next/navigation";

type UserType = {
  name?: string;
  email?: string;
  role?: string;
};

export default function DashboardClient({ user }: { user: UserType }) {
  const [activeTab, setActiveTab] = useState<"leads" | "plans">("leads");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const tabs: {
    id: "leads" | "plans";
    label: string;
    icon: any;
    component: JSX.Element;
  }[] = [
    { id: "leads", label: "Leads", icon: Users, component: <LeadsPage /> },
    { id: "plans", label: "Plans", icon: TrendingUp, component: <PlansPage /> },
  ];

  const ActiveTab = tabs.find((t) => t.id === activeTab)?.component;
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40 shadow-md">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/boom_w.png" alt="Logo" className="h-14 object-contain" />
            <div className="hidden md:block border-l-2 border-orange-500 pl-4">
              <h1 className="text-xl font-black text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                Admin Dashboard
              </h1>
              <p className="text-xs text-gray-400">Manage your business</p>
            </div>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-3 hover:bg-gray-800 rounded-lg px-3 py-2 transition-colors"
            >
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-white">
                  {user?.email || "Loading..."}
                </p>
                <p className="text-xs text-gray-400 capitalize">
                  {user?.role || "Admin"}
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center ring-2 ring-orange-400/30">
                <span className="text-white font-bold">
                  {user?.email?.[0]?.toUpperCase() || "A"}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-bold text-gray-900">
                    {user?.name || "Admin User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>

                <button
                  onClick={() => {
                    setShowProfile(true);
                    setDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>My Profile</span>
                </button>

                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <nav className="px-4 md:px-8 flex gap-2 overflow-x-auto border-t border-gray-800">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all relative ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400" />
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">{ActiveTab}</main>

      {/* Overlay for dropdown close */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setDropdownOpen(false)}
        />
      )}

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center gap-4 mt-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "A"}
              </div>
              <h2 className="text-xl font-bold text-gray-900">{user?.name || "Admin User"}</h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
              <p className="text-xs px-3 py-1 bg-orange-100 text-orange-600 rounded-full capitalize">
                {user?.role || "admin"}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowProfile(false)}
                className="px-5 py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
