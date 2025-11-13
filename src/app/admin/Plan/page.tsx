"use client";

import { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Save,
  X,
  CheckCircle2,
  XCircle,
  Star,
} from "lucide-react";
import { get, post, put, remove } from "@/lib/api";

export default function PlansPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newPlan, setNewPlan] = useState({
    name: "",
    price: "",
    features: "",
    speed: "",
    ott: false,
    live_tv: false,
    popular: false,
  });
  const [editPlanId, setEditPlanId] = useState<number | null>(null);
  const [editPlanData, setEditPlanData] = useState<any>({});

  // Fetch all plans
  const fetchPlans = async () => {
    try {
      const res = await get("/plans/plans");
      setPlans(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load plans");
    } finally {
      setLoading(false);
    }
  };

  // Add a new plan
  const handleAddPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await post("/plans/plans", newPlan);
      setNewPlan({
        name: "",
        price: "",
        features: "",
        speed: "",
        ott: false,
        live_tv: false,
        popular: false,
      });
      fetchPlans();
    } catch (err) {
      console.error(err);
      setError("Failed to add plan");
    }
  };

  // Delete a plan
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    try {
      await remove(`/plans/plans/${id}`);
      fetchPlans();
    } catch (err) {
      console.error(err);
      setError("Failed to delete plan");
    }
  };

  // Edit a plan
  const handleEdit = (plan: any) => {
    setEditPlanId(plan.id);
    setEditPlanData({ ...plan });
  };

  // Save updated plan
  const handleSave = async (id: string) => {
    try {
      await put(`/plans/plans/${id}`, editPlanData);
      setEditPlanId(null);
      fetchPlans();
    } catch (err) {
      console.error(err);
      setError("Failed to update plan");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading plans...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Plan Management</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {/* Add Plan Form */}
      <form
        onSubmit={handleAddPlan}
        className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-wrap gap-3"
      >
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded flex-1 min-w-[150px]"
          value={newPlan.name}
          onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded flex-1 min-w-[100px]"
          value={newPlan.price}
          onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Speed (e.g., 100 Mbps)"
          className="border p-2 rounded flex-1 min-w-[120px]"
          value={newPlan.speed}
          onChange={(e) => setNewPlan({ ...newPlan, speed: e.target.value })}
        />
        <input
          type="text"
          placeholder="Features (comma separated)"
          className="border p-2 rounded flex-1 min-w-[200px]"
          value={newPlan.features}
          onChange={(e) => setNewPlan({ ...newPlan, features: e.target.value })}
        />

        {/* Boolean Toggles */}
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={newPlan.ott}
            onChange={(e) => setNewPlan({ ...newPlan, ott: e.target.checked })}
          />
          OTT
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={newPlan.live_tv}
            onChange={(e) =>
              setNewPlan({ ...newPlan, live_tv: e.target.checked })
            }
          />
          Live TV
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={newPlan.popular}
            onChange={(e) =>
              setNewPlan({ ...newPlan, popular: e.target.checked })
            }
          />
          Popular
        </label>

        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Add Plan
        </button>
      </form>

      {/* Plans Table */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="min-w-full text-left border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Speed</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Features</th>
              <th className="py-2 px-4 border text-center">OTT</th>
              <th className="py-2 px-4 border text-center">Live TV</th>
              <th className="py-2 px-4 border text-center">Popular</th>
              <th className="py-2 px-4 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.length > 0 ? (
              plans.map((plan) => (
                <tr key={plan.id} className="border-t hover:bg-gray-50">
                  {editPlanId === plan.id ? (
                    <>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          value={editPlanData.name}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              name: e.target.value,
                            })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          value={editPlanData.speed}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              speed: e.target.value,
                            })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="number"
                          value={editPlanData.price}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              price: e.target.value,
                            })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          value={editPlanData.features}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              features: e.target.value,
                            })
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="text-center border">
                        <input
                          type="checkbox"
                          checked={editPlanData.ott}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              ott: e.target.checked,
                            })
                          }
                        />
                      </td>
                      <td className="text-center border">
                        <input
                          type="checkbox"
                          checked={editPlanData.live_tv}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              live_tv: e.target.checked,
                            })
                          }
                        />
                      </td>
                      <td className="text-center border">
                        <input
                          type="checkbox"
                          checked={editPlanData.popular}
                          onChange={(e) =>
                            setEditPlanData({
                              ...editPlanData,
                              popular: e.target.checked,
                            })
                          }
                        />
                      </td>
                      <td className="py-2 px-4 border text-center flex gap-2 justify-center">
                        <button
                          onClick={() => handleSave(plan.id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <Save size={18} />
                        </button>
                        <button
                          onClick={() => setEditPlanId(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X size={18} />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-2 px-4 border font-semibold text-gray-800">
                        {plan.name}
                      </td>
                      <td className="py-2 px-4 border">{plan.speed}</td>
                      <td className="py-2 px-4 border">₹{plan.price}</td>
                      <td className="py-2 px-4 border">{plan.features}</td>
                      <td className="text-center border">
                        {plan.ott ? (
                          <CheckCircle2 className="text-green-600 inline" />
                        ) : (
                          <XCircle className="text-red-500 inline" />
                        )}
                      </td>
                      <td className="text-center border">
                        {plan.live_tv ? (
                          <CheckCircle2 className="text-green-600 inline" />
                        ) : (
                          <XCircle className="text-red-500 inline" />
                        )}
                      </td>
                      <td className="text-center border">
                        {plan.popular ? (
                          <Star className="text-yellow-500 inline" />
                        ) : (
                          <XCircle className="text-gray-400 inline" />
                        )}
                      </td>
                      <td className="py-2 px-4 border text-center flex gap-2 justify-center">
                        <button
                          onClick={() => handleEdit(plan)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(plan.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No plans available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
