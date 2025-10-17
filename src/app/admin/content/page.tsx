'use client';

import { useState, useEffect } from "react";
import {
  FileText,
  Image,
  Wifi,
  PlusCircle,
  Edit,
  Trash2,
  Upload,
  X,
  Check,
  Loader2
} from "lucide-react";
import api from "@/lib/api";

// Types
interface Banner {
  id: number;
  content_type: string;
  title: string;
  banner_url: string;
  banner_heading?: string;
  description?: string;
}

interface Plan {
  id: number;
  name: string;
  speed: string;
  price: number;
  active: boolean;
  popular?: boolean;
  ott?: boolean;
  liveTv?: boolean;
  features?: string;
}

export default function ContentPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newBanner, setNewBanner] = useState<{ title: string; image: string }>({ title: "", image: "" });
  const [showAddBanner, setShowAddBanner] = useState<boolean>(false);
  const [hoveredBanner, setHoveredBanner] = useState<number | null>(null);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [saving, setSaving] = useState<boolean>(false);

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [bannersRes, plansRes] = await Promise.all([
        api.get("/contents/contents/"),
        api.get("/plans/")
      ]);

      const bannersData: Banner[] = bannersRes.data.filter((item: Banner) => item.content_type === "banner");
      setBanners(bannersData);
      setPlans(plansRes.data);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Banner API
  const handleAddBanner = async () => {
    if (!newBanner.title || !newBanner.image) return alert("Please fill both fields");
    setSaving(true);
    try {
      const response = await api.post("/contents/contents/", {
        content_type: "banner",
        title: newBanner.title,
        banner_url: newBanner.image,
        banner_heading: newBanner.title,
        description: ""
      });
      setBanners([...banners, response.data]);
      setNewBanner({ title: "", image: "" });
      setShowAddBanner(false);
    } catch (err: any) {
      alert("Error adding banner: " + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBanner = async (id: number) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;
    try {
      await api.delete(`/contents/contents/${id}/`);
      setBanners(banners.filter(b => b.id !== id));
    } catch (err: any) {
      alert("Error deleting banner: " + (err.response?.data?.message || err.message));
    }
  };

  const togglePlanStatus = async (id: number) => {
    const plan = plans.find(p => p.id === id);
    if (!plan) return;
    try {
      const response = await api.patch(`/plans/${id}/`, { active: !plan.active });
      setPlans(plans.map(p => p.id === id ? response.data : p));
    } catch (err: any) {
      alert("Error updating plan: " + (err.response?.data?.message || err.message));
    }
  };

  const handleDeletePlan = async (id: number) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    try {
      await api.delete(`/plans/${id}/`);
      setPlans(plans.filter(p => p.id !== id));
    } catch (err: any) {
      alert("Error deleting plan: " + (err.response?.data?.message || err.message));
    }
  };

  // Loading/Error UI
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-orange-600" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
        <X className="w-8 h-8 text-red-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Data</h2>
        <p className="mb-6">{error}</p>
        <button onClick={fetchData} className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold">
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      {/* Add Banner & Plan Management Sections */}
      {/* Your existing JSX can remain the same */}
    </div>
  );
}
