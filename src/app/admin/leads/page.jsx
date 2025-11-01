"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Edit2,
  Trash2,
  Eye,
  Plus,
  RefreshCw,
  Download,
  Mail,
  Phone,
  Building2,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Search as SearchIcon,
} from "lucide-react";
import api from "@/lib/api";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedLead, setSelectedLead] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    phone_no: "",
    email: "",
    source: "",
    connection_type: "business",
    status: "new",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalLeads, setTotalLeads] = useState(0);

  // Filters
  const [filterSource, setFilterSource] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const statusOptions = ["new", "contacted", "qualified", "converted", "lost"];

  const statusConfig = {
    new: { color: "bg-orange-100 text-orange-800", icon: Clock, label: "New" },
    contacted: { color: "bg-yellow-100 text-yellow-800", icon: Phone, label: "Contacted" },
    qualified: { color: "bg-purple-100 text-purple-800", icon: TrendingUp, label: "Qualified" },
    converted: { color: "bg-green-100 text-green-800", icon: CheckCircle2, label: "Converted" },
    lost: { color: "bg-red-100 text-red-800", icon: XCircle, label: "Lost" },
  };

  // Fetch leads from API (server pagination)
  const fetchLeads = async (page = 1, page_size = 5) => {
    setLoading(true);
    try {
      const response = await api.get(`/leads/leads/?page=${page}&page_size=${page_size}`);
      const data = response?.data;
      setLeads(data?.items || []);
      setTotalLeads(data?.total || 0);
      setError(null);
    } catch (err) {
      console.error("fetchLeads error:", err);
      setError("Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads(currentPage, pageSize);
  }, [currentPage, pageSize]);

  // Filtered leads (client-side filtering + search)
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchSource = filterSource === "all" || lead.source === filterSource;
      const matchType = filterType === "all" || lead.connection_type === filterType;
      const matchStatus = filterStatus === "all" || lead.status === filterStatus;
      const matchSearch =
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.source.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSource && matchType && matchStatus && matchSearch;
    });
  }, [leads, filterSource, filterType, filterStatus, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(totalLeads / pageSize));

  // Delete lead
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await api.delete(`/leads/leads/${id}/`);
      fetchLeads(currentPage, pageSize);
    } catch (err) {
      console.error("delete error:", err);
      alert("Failed to delete lead");
    }
  };

  // Modal handlers
  const openModal = (mode, lead = null) => {
    setModalMode(mode);
    setSelectedLead(lead);
    setFormData(
      lead || {
        name: "",
        state: "",
        phone_no: "",
        email: "",
        source: "",
        connection_type: "business",
        status: "new",
      }
    );
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.phone_no || !formData.email) {
      alert("Please fill in required fields");
      return;
    }
    try {
      if (modalMode === "add") {
        await api.post("/leads/leads/", formData);
      } else if (modalMode === "edit" && selectedLead?.id) {
        await api.put(`/leads/leads/${selectedLead.id}/`, formData);
      }
      setShowModal(false);
      fetchLeads(currentPage, pageSize);
    } catch (err) {
      console.error("save error:", err);
      alert("Failed to save lead");
    }
  };

  // CSV export
  const quote = (v) => (v == null ? "" : `"${String(v).replace(/"/g, '""')}"`);
  const handleExport = () => {
    const header = ["Name", "State", "Phone", "Email", "Source", "Type", "Status"];
    const rows = filteredLeads.map((l) => [
      quote(l.name),
      quote(l.state),
      quote(l.phone_no),
      quote(l.email),
      quote(l.source),
      quote(l.connection_type),
      quote(l.status),
    ]);
    const csv = [header.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_export_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <RefreshCw className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <div className="flex gap-3">
            <button onClick={() => fetchLeads(currentPage, pageSize)} className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button onClick={handleExport} className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 flex items-center gap-2">
              <Download className="w-4 h-4" /> Export
            </button>
            <button onClick={() => openModal("add")} className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Lead
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 mb-2 flex items-center gap-2">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-2 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                {["Lead", "Contact", "Source", "Type", "Status", "Date", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
                ))}
              </tr>

              {/* Filters in header */}
              <tr className="bg-gray-100">
                <th></th>
                <th></th>
                <th className="px-6 py-2">
                  <select
                    value={filterSource}
                    onChange={(e) => setFilterSource(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="all">All Sources</option>
                    {[...new Set(leads.map((l) => l.source))].filter(Boolean).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </th>
                <th className="px-6 py-2">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="business">Business</option>
                    <option value="home">Home</option>
                  </select>
                </th>
                <th className="px-6 py-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="all">All Status</option>
                    {statusOptions.map((s) => (
                      <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                  </select>
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => {
                const cfg = statusConfig[lead.status] || {};
                const Icon = cfg.icon || Clock;
                return (
                  <tr key={lead.id} className="hover:bg-orange-50 transition">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-10 w-10 bg-orange-100 text-orange-700 font-semibold flex items-center justify-center rounded-full">
                        {lead.name?.charAt(0).toUpperCase() || "?"}
                      </div>
                      <span>{lead.name || "—"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="flex items-center gap-1"><Mail className="w-4 h-4" /> {lead.email || "—"}</p>
                      <p className="flex items-center gap-1 text-gray-500"><Phone className="w-4 h-4" /> {lead.phone_no || "—"}</p>
                    </td>
                    <td className="px-6 py-4">{lead.source || "—"}</td>
                    <td className="px-6 py-4 capitalize">{lead.connection_type || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${cfg.color || "bg-gray-100 text-gray-800"}`}>
                        <Icon className="w-3 h-3" /> {cfg.label || lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      {lead.date ? new Date(lead.date).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-6 py-4 flex gap-2 justify-end">
                      <button onClick={() => openModal("view", lead)} className="p-1 text-gray-600 hover:bg-gray-100 rounded"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => openModal("edit", lead)} className="p-1 text-orange-600 hover:bg-orange-100 rounded"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(lead.id)} className="p-1 text-red-600 hover:bg-red-100 rounded"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                );
              })}
              {!filteredLeads.length && <tr><td colSpan={7} className="py-10 text-center text-gray-500">No leads found</td></tr>}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <p className="text-sm text-gray-600">
            Showing {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalLeads)} of {totalLeads} leads
          </p>

          <div className="flex items-center gap-2">
            <select
              value={pageSize}
              onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500"
            >
              {[5, 10, 20].map((n) => <option key={n} value={n}>{n} per page</option>)}
            </select>

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 hover:bg-orange-50"
            >Prev</button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded-lg ${currentPage === i + 1 ? "bg-orange-600 text-white border-orange-600" : "hover:bg-orange-50"}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 hover:bg-orange-50"
            >Next</button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-lg font-semibold mb-4 capitalize">
                {modalMode === "view" ? "View Lead" : modalMode === "add" ? "Add Lead" : "Edit Lead"}
              </h2>

              {modalMode === "view" ? (
                <div className="space-y-2 text-gray-700">
                  {selectedLead ? (
                    <>
                      <p><span className="font-semibold">Name:</span> {selectedLead.name}</p>
                      <p><span className="font-semibold">Phone:</span> {selectedLead.phone_no}</p>
                      <p><span className="font-semibold">Email:</span> {selectedLead.email}</p>
                      <p><span className="font-semibold">State:</span> {selectedLead.state}</p>
                      <p><span className="font-semibold">Source:</span> {selectedLead.source}</p>
                      <p><span className="font-semibold">Type:</span> {selectedLead.connection_type}</p>
                      <p><span className="font-semibold">Status:</span> {selectedLead.status}</p>
                      <p><span className="font-semibold">Date:</span> {new Date(selectedLead.date).toLocaleString()}</p>
                    </>
                  ) : <p>No lead selected</p>}
                </div>
              ) : (
                <div className="space-y-3">
                  {["name","state","phone_no","email","source"].map(f => (
                    <input key={f} name={f} value={formData[f]} onChange={handleFormChange} placeholder={f.charAt(0).toUpperCase()+f.slice(1)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                  ))}
                  <div className="flex gap-3">
                    <select name="connection_type" value={formData.connection_type} onChange={handleFormChange} className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                      <option value="business">Business</option>
                      <option value="home">Home</option>
                    </select>
                    <select name="status" value={formData.status} onChange={handleFormChange} className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500">
                      {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowModal(false)} className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Close</button>
                {modalMode !== "view" && <button onClick={handleFormSubmit} className="flex-1 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">{modalMode === "add" ? "Add Lead" : "Save Changes"}</button>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
