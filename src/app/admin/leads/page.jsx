// "use client";

// import { useState } from "react";
// import { Edit2, Trash2, Mail, Phone, Calendar, Tag, Search, UserCheck, Clock, XCircle, CheckCircle, Plus, Download, Filter, MoreVertical, Eye, RefreshCw, TrendingUp, Users, DollarSign, ArrowUpRight } from "lucide-react";
// import api from "@/lib/api";


// export default function LeadsPage() {
//   const [leads, setLeads] = useState([
//     {
//       id: 1,
//       name: "Priya Sharma",
//       email: "priya@example.com",
//       phone: "+91 9876543210",
//       source: "Website",
//       date: "2025-09-20",
//       status: "new",
//       connectionType: "Home",
//       company: "Tech Solutions"
//     },
//     {
//       id: 2,
//       name: "Rahul Verma",
//       email: "rahul@example.com",
//       phone: "+91 9123456780",
//       source: "Campaign",
//       date: "2025-09-21",
//       status: "contacted",
//       connectionType: "Business",
//       company: "Digital Marketing Co"
//     },
//     {
//       id: 3,
//       name: "Amit Patel",
//       email: "amit@example.com",
//       phone: "+91 9988776655",
//       source: "Referral",
//       date: "2025-09-22",
//       status: "qualified",
//       connectionType: "Business",
//       company: "StartUp Hub"
//     },
//     {
//       id: 4,
//       name: "Sneha Reddy",
//       email: "sneha@example.com",
//       phone: "+91 8877665544",
//       source: "Website",
//       date: "2025-09-18",
//       status: "converted",
//       connectionType: "Home",
//       company: "Enterprise Corp"
//     },
//     {
//       id: 5,
//       name: "Vikram Singh",
//       email: "vikram@example.com",
//       phone: "+91 7766554433",
//       source: "Social Media",
//       date: "2025-09-15",
//       status: "lost",
//       connectionType: "Business",
//       company: "Local Business"
//     },
//   ]);
  
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [filterSource, setFilterSource] = useState("all");
//   const [filterConnectionType, setFilterConnectionType] = useState("all");
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [editingLead, setEditingLead] = useState(null);

//   const statusOptions = [
//     { value: "new", label: "New", color: "bg-blue-100 text-blue-800 border-blue-200", icon: Clock },
//     { value: "contacted", label: "Contacted", color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: Phone },
//     { value: "qualified", label: "Qualified", color: "bg-purple-100 text-purple-800 border-purple-200", icon: UserCheck },
//     { value: "converted", label: "Converted", color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
//     { value: "lost", label: "Lost", color: "bg-red-100 text-red-800 border-red-200", icon: XCircle },
//   ];

//   const sources = ["Website", "Campaign", "Referral", "Social Media", "Email", "Cold Call"];
//   const connectionTypes = ["Home", "Business"];

//   // API INTEGRATION POINT: Update lead status
//   async function changeStatus(leadId, newStatus) {
//     // TODO: Add API call
//     // await fetch(`/api/leads/${leadId}/status`, {
//     //   method: 'PATCH',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ status: newStatus })
//     // });
    
//     setLeads(leads.map(lead => 
//       lead.id === leadId ? { ...lead, status: newStatus } : lead
//     ));
//   }

//   // API INTEGRATION POINT: Delete lead
//   async function deleteLead(id) {
//     if (confirm("Are you sure you want to delete this lead?")) {
//       // TODO: Add API call
//       // await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      
//       setLeads(leads.filter((l) => l.id !== id));
//     }
//   }

//   // API INTEGRATION POINT: Add new lead
//   async function handleAddLead(newLead) {
//     // TODO: Add API call
//     // const response = await fetch('/api/leads', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(newLead)
//     // });
//     // const data = await response.json();
    
//     setLeads([...leads, { ...newLead, id: leads.length + 1, date: new Date().toISOString().split('T')[0] }]);
//     setShowAddModal(false);
//   }

//   // API INTEGRATION POINT: Edit lead
//   async function handleEditLead(updatedLead) {
//     // TODO: Add API call
//     // await fetch(`/api/leads/${updatedLead.id}`, {
//     //   method: 'PUT',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(updatedLead)
//     // });
    
//     setLeads(leads.map(lead => lead.id === updatedLead.id ? updatedLead : lead));
//     setShowEditModal(false);
//     setEditingLead(null);
//   }

//   function openEditModal(lead) {
//     setEditingLead({ ...lead });
//     setShowEditModal(true);
//   }

//   // API INTEGRATION POINT: Export leads
//   async function exportLeads() {
//     // TODO: Add API call to export
//     // const response = await fetch('/api/leads/export');
//     // const blob = await response.blob();
//     // const url = window.URL.createObjectURL(blob);
//     // const a = document.createElement('a');
//     // a.href = url;
//     // a.download = 'leads.csv';
//     // a.click();
    
//     alert("Export functionality - Connect to API");
//   }

//   const filteredLeads = leads.filter(lead => {
//     const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       lead.phone.includes(searchTerm) ||
//       lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesStatus = filterStatus === "all" || lead.status === filterStatus;
//     const matchesSource = filterSource === "all" || lead.source === filterSource;
//     const matchesConnectionType = filterConnectionType === "all" || lead.connectionType === filterConnectionType;
    
//     return matchesSearch && matchesStatus && matchesSource && matchesConnectionType;
//   });

//   const getStatusConfig = (status) => {
//     return statusOptions.find(s => s.value === status) || statusOptions[0];
//   };

//   const statusCounts = {
//     all: leads.length,
//     new: leads.filter(l => l.status === "new").length,
//     contacted: leads.filter(l => l.status === "contacted").length,
//     qualified: leads.filter(l => l.status === "qualified").length,
//     converted: leads.filter(l => l.status === "converted").length,
//     lost: leads.filter(l => l.status === "lost").length,
//   };

//   const totalValue = leads
//     .filter(l => l.status === "converted")
//     .length;

//   const conversionRate = leads.length > 0 
//     ? ((statusCounts.converted / leads.length) * 100).toFixed(1) 
//     : 0;

//   const homeConnections = leads.filter(l => l.connectionType === "Home").length;
//   const businessConnections = leads.filter(l => l.connectionType === "Business").length;

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-[1600px] mx-auto">
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Leads Management</h1>
//               <p className="text-gray-600 font-medium">Track, manage and convert your business opportunities</p>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={exportLeads}
//                 className="px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
//               >
//                 <Download className="w-4 h-4" />
//                 Export
//               </button>
//               <button
//                 onClick={() => setShowAddModal(true)}
//                 className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add Lead
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-blue-600" />
//               </div>
//               <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
//                 <ArrowUpRight className="w-3 h-3" />
//                 12%
//               </span>
//             </div>
//             <p className="text-sm font-semibold text-gray-500 mb-1">Total Leads</p>
//             <p className="text-3xl font-black text-gray-900">{leads.length}</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                 <CheckCircle className="w-6 h-6 text-green-600" />
//               </div>
//               <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
//                 <ArrowUpRight className="w-3 h-3" />
//                 8%
//               </span>
//             </div>
//             <p className="text-sm font-semibold text-gray-500 mb-1">Converted</p>
//             <p className="text-3xl font-black text-gray-900">{statusCounts.converted}</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-purple-600" />
//               </div>
//               <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
//                 {conversionRate}%
//               </span>
//             </div>
//             <p className="text-sm font-semibold text-gray-500 mb-1">Conversion Rate</p>
//             <p className="text-3xl font-black text-gray-900">{conversionRate}%</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-orange-600" />
//               </div>
//               <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//                 {homeConnections}H
//               </span>
//             </div>
//             <p className="text-sm font-semibold text-gray-500 mb-1">Home Connections</p>
//             <p className="text-3xl font-black text-gray-900">{homeConnections}</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-purple-600" />
//               </div>
//               <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
//                 {businessConnections}B
//               </span>
//             </div>
//             <p className="text-sm font-semibold text-gray-500 mb-1">Business Connections</p>
//             <p className="text-3xl font-black text-gray-900">{businessConnections}</p>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-2 mb-6">
//           <button
//             onClick={() => setFilterStatus("all")}
//             className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
//               filterStatus === "all"
//                 ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
//                 : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
//             }`}
//           >
//             All Leads ({statusCounts.all})
//           </button>
//           {statusOptions.map((status) => {
//             const Icon = status.icon;
//             return (
//               <button
//                 key={status.value}
//                 onClick={() => setFilterStatus(status.value)}
//                 className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
//                   filterStatus === status.value
//                     ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
//                     : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 {status.label} ({statusCounts[status.value]})
//               </button>
//             );
//           })}
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="p-6 border-b border-gray-100">
//             <div className="flex flex-col lg:flex-row gap-4">
//               <div className="relative flex-1">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by name, email, phone, or company..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <select
//                 value={filterSource}
//                 onChange={(e) => setFilterSource(e.target.value)}
//                 className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white"
//               >
//                 <option value="all">All Sources</option>
//                 {sources.map(source => (
//                   <option key={source} value={source}>{source}</option>
//                 ))}
//               </select>
//               <select
//                 value={filterConnectionType}
//                 onChange={(e) => setFilterConnectionType(e.target.value)}
//                 className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white"
//               >
//                 <option value="all">All Types</option>
//                 {connectionTypes.map(type => (
//                   <option key={type} value={type}>{type}</option>
//                 ))}
//               </select>
//               <button
//                 onClick={() => {
//                   setFilterStatus("all");
//                   setFilterSource("all");
//                   setFilterConnectionType("all");
//                   setSearchTerm("");
//                 }}
//                 className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2 whitespace-nowrap"
//               >
//                 <RefreshCw className="w-4 h-4" />
//                 Reset
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-100">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Lead Info
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Contact
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Source
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Connection Type
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-black text-gray-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="bg-white divide-y divide-gray-100">
//                 {filteredLeads.map((lead) => {
//                   const statusConfig = getStatusConfig(lead.status);
//                   const StatusIcon = statusConfig.icon;
                  
//                   return (
//                     <tr
//                       key={lead.id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <div>
//                           <div className="font-bold text-gray-900">{lead.name}</div>
//                           <div className="text-sm text-gray-500 font-medium">{lead.company}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="space-y-1">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Mail className="w-4 h-4 text-gray-400" />
//                             {lead.email}
//                           </div>
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Phone className="w-4 h-4 text-gray-400" />
//                             {lead.phone}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="px-3 py-1.5 inline-flex text-xs font-bold rounded-lg bg-gray-100 text-gray-700 border border-gray-200">
//                           {lead.source}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`px-3 py-1.5 inline-flex text-xs font-bold rounded-lg border ${
//                           lead.connectionType === "Home" 
//                             ? "bg-orange-100 text-orange-700 border-orange-200" 
//                             : "bg-purple-100 text-purple-700 border-purple-200"
//                         }`}>
//                           {lead.connectionType}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Calendar className="w-4 h-4 text-gray-400" />
//                           {lead.date}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="relative group">
//                           <button className={`px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wide flex items-center gap-2 border ${statusConfig.color} hover:opacity-80 transition-all`}>
//                             <StatusIcon className="w-3.5 h-3.5" />
//                             {statusConfig.label}
//                           </button>
                          
//                           <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
//                             <div className="p-2">
//                               <p className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Change Status</p>
//                               {statusOptions.map((option) => {
//                                 const OptionIcon = option.icon;
//                                 return (
//                                   <button
//                                     key={option.value}
//                                     onClick={() => changeStatus(lead.id, option.value)}
//                                     className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 ${lead.status === option.value ? 'bg-orange-50 text-orange-700' : ''}`}
//                                   >
//                                     <OptionIcon className="w-4 h-4" />
//                                     <span className="font-semibold text-sm">{option.label}</span>
//                                   </button>
//                                 );
//                               })}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => setSelectedLead(lead)}
//                             className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
//                             title="View Details"
//                           >
//                             <Eye className="w-4 h-4 text-blue-600" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(lead)}
//                             className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
//                             title="Edit"
//                           >
//                             <Edit2 className="w-4 h-4 text-gray-600" />
//                           </button>
//                           <button
//                             onClick={() => deleteLead(lead.id)}
//                             className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group"
//                             title="Delete"
//                           >
//                             <Trash2 className="w-4 h-4 text-red-600" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//                 {filteredLeads.length === 0 && (
//                   <tr>
//                     <td colSpan="7" className="text-center py-16">
//                       <div className="flex flex-col items-center">
//                         <Search className="w-16 h-16 text-gray-300 mb-4" />
//                         <p className="text-gray-500 font-bold text-lg mb-2">No leads found</p>
//                         <p className="text-gray-400 text-sm">
//                           {searchTerm || filterStatus !== "all" || filterSource !== "all" || filterConnectionType !== "all"
//                             ? "Try adjusting your filters"
//                             : "Get started by adding your first lead"}
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {filteredLeads.length > 0 && (
//             <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
//               <p className="text-sm text-gray-600 font-medium">
//                 Showing <span className="font-bold text-gray-900">{filteredLeads.length}</span> of{" "}
//                 <span className="font-bold text-gray-900">{leads.length}</span> leads
//               </p>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border-2 border-gray-200 rounded-lg font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
//                   Previous
//                 </button>
//                 <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold text-sm hover:bg-orange-600 transition-all">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {showAddModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
//             <h2 className="text-2xl font-black text-gray-900 mb-6">Add New Lead</h2>
//             <div className="space-y-4 mb-6">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter name"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter email"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter phone"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
//                 <input
//                   type="text"
//                   placeholder="Enter company"
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Source</label>
//                   <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white">
//                     {sources.map(source => (
//                       <option key={source} value={source}>{source}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Connection Type</label>
//                   <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white">
//                     {connectionTypes.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleAddLead({
//                   name: "New Lead",
//                   email: "new@example.com",
//                   phone: "+91 9999999999",
//                   source: "Website",
//                   status: "new",
//                   connectionType: "Home",
//                   company: "New Company"
//                 })}
//                 className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
//               >
//                 Add Lead
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showEditModal && editingLead && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
//             <h2 className="text-2xl font-black text-gray-900 mb-6">Edit Lead</h2>
//             <div className="space-y-4 mb-6">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   value={editingLead.name}
//                   onChange={(e) => setEditingLead({...editingLead, name: e.target.value})}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   value={editingLead.email}
//                   onChange={(e) => setEditingLead({...editingLead, email: e.target.value})}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   value={editingLead.phone}
//                   onChange={(e) => setEditingLead({...editingLead, phone: e.target.value})}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
//                 <input
//                   type="text"
//                   value={editingLead.company}
//                   onChange={(e) => setEditingLead({...editingLead, company: e.target.value})}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Source</label>
//                   <select 
//                     value={editingLead.source}
//                     onChange={(e) => setEditingLead({...editingLead, source: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white"
//                   >
//                     {sources.map(source => (
//                       <option key={source} value={source}>{source}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Connection Type</label>
//                   <select 
//                     value={editingLead.connectionType}
//                     onChange={(e) => setEditingLead({...editingLead, connectionType: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white"
//                   >
//                     {connectionTypes.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
//                 <select 
//                   value={editingLead.status}
//                   onChange={(e) => setEditingLead({...editingLead, status: e.target.value})}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold bg-white"
//                 >
//                   {statusOptions.map(status => (
//                     <option key={status.value} value={status.value}>{status.label}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => {
//                   setShowEditModal(false);
//                   setEditingLead(null);
//                 }}
//                 className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleEditLead(editingLead)}
//                 className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedLead && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
//             <h2 className="text-2xl font-black text-gray-900 mb-6">Lead Details</h2>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm font-bold text-gray-500 uppercase mb-1">Name</p>
//                 <p className="text-lg font-bold text-gray-900">{selectedLead.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-gray-500 uppercase mb-1">Company</p>
//                 <p className="text-lg font-bold text-gray-900">{selectedLead.company}</p>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm font-bold text-gray-500 uppercase mb-1">Email</p>
//                   <p className="text-gray-900 font-medium">{selectedLead.email}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-500 uppercase mb-1">Phone</p>
//                   <p className="text-gray-900 font-medium">{selectedLead.phone}</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-4">
//                 <div>
//                   <p className="text-sm font-bold text-gray-500 uppercase mb-1">Source</p>
//                   <p className="text-gray-900 font-medium">{selectedLead.source}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-500 uppercase mb-1">Connection Type</p>
//                   <p className="text-gray-900 font-medium">{selectedLead.connectionType}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-500 uppercase mb-1">Date</p>
//                   <p className="text-gray-900 font-medium">{selectedLead.date}</p>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setSelectedLead(null)}
//               className="w-full mt-6 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Edit2, Trash2, Eye, Plus, RefreshCw } from "lucide-react";
// import api from "@/lib/api";
// import Modal from "@/components/Modal";

// export default function LeadsPage() {
//   const [leads, setLeads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [showModal, setShowModal] = useState(false);
//   const [modalMode, setModalMode] = useState("add"); // add or edit
//   const [selectedLead, setSelectedLead] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     phone_no: "",
//     email: "",
//     source: "",
//     connection_type: "home",
//     status: "new"
//   });

//   const statusOptions = ["new", "contacted", "qualified", "converted", "lost"];

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const fetchLeads = async () => {
//     try {
//       const response = await api.get("/leads/leads/");
//       setLeads(response.data);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load leads");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this lead?")) return;
//     try {
//       await api.delete(`/leads/leads/${id}`);
//       setLeads(leads.filter((lead) => lead.id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete lead");
//     }
//   };

//   const openModal = (mode, lead = null) => {
//     setModalMode(mode);
//     setSelectedLead(lead);
//     if (lead) {
//       setFormData({ ...lead });
//     } else {
//       setFormData({
//         name: "",
//         company: "",
//         phone_no: "",
//         email: "",
//         source: "",
//         connection_type: "home",
//         status: "new"
//       });
//     }
//     setShowModal(true);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (modalMode === "add") {
//         await api.post("/leads/leads/", formData);
//       } else if (modalMode === "edit") {
//         await api.put(`/leads/leads/${selectedLead.id}`, formData);
//       }
//       fetchLeads();
//       setShowModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save lead");
//     }
//   };

//   const analytics = {
//     total: leads.length,
//     new: leads.filter((l) => l.status === "new").length,
//     contacted: leads.filter((l) => l.status === "contacted").length,
//     qualified: leads.filter((l) => l.status === "qualified").length,
//     converted: leads.filter((l) => l.status === "converted").length,
//     lost: leads.filter((l) => l.status === "lost").length
//   };

//   if (loading) return <p className="p-4">Loading leads...</p>;
//   if (error) return <p className="p-4 text-red-500">{error}</p>;

//   return (
//     <div className="p-4 space-y-6">
//       {/* Header + Analytics */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Leads Management</h2>
//         <button
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => openModal("add")}
//         >
//           <Plus className="mr-2" /> Add Lead
//         </button>
//       </div>

//       <div className="grid grid-cols-5 gap-4">
//         {Object.keys(analytics).map((key) => (
//           <div key={key} className="bg-gray-100 p-4 rounded shadow">
//             <p className="text-lg font-bold">{analytics[key]}</p>
//             <p className="capitalize">{key} leads</p>
//           </div>
//         ))}
//       </div>

//       {/* Table */}
//       <table className="min-w-full border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             {["Name", "Company", "Phone", "Email", "Source", "Connection Type", "Status", "Date", "Actions"].map(
//               (header) => (
//                 <th key={header} className="border px-4 py-2">{header}</th>
//               )
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead.id}>
//               <td className="border px-4 py-2">{lead.name}</td>
//               <td className="border px-4 py-2">{lead.company}</td>
//               <td className="border px-4 py-2">{lead.phone_no}</td>
//               <td className="border px-4 py-2">{lead.email}</td>
//               <td className="border px-4 py-2">{lead.source}</td>
//               <td className="border px-4 py-2">{lead.connection_type}</td>
//               <td className="border px-4 py-2">{lead.status}</td>
//               <td className="border px-4 py-2">{new Date(lead.date).toLocaleString()}</td>
//               <td className="border px-4 py-2 flex space-x-2">
//                 <button onClick={() => openModal("edit", lead)} className="text-green-500">
//                   <Edit2 />
//                 </button>
//                 <button onClick={() => handleDelete(lead.id)} className="text-red-500">
//                   <Trash2 />
//                 </button>
//                 <button onClick={() => alert(JSON.stringify(lead, null, 2))} className="text-blue-500">
//                   <Eye />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal */}
//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <h3 className="text-xl font-bold mb-4">{modalMode === "add" ? "Add Lead" : "Edit Lead"}</h3>
//           <form onSubmit={handleFormSubmit} className="space-y-4">
//             {["name", "company", "phone_no", "email", "source"].map((field) => (
//               <div key={field}>
//                 <label className="block font-semibold">{field.replace("_", " ")}</label>
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field] || ""}
//                   onChange={handleFormChange}
//                   className="w-full border px-3 py-2 rounded"
//                   required={field !== "company" && field !== "source"}
//                 />
//               </div>
//             ))}

//             <div>
//               <label className="block font-semibold">Connection Type</label>
//               <select
//                 name="connection_type"
//                 value={formData.connection_type}
//                 onChange={handleFormChange}
//                 className="w-full border px-3 py-2 rounded"
//               >
//                 <option value="home">Home</option>
//                 <option value="business">Business</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-semibold">Status</label>
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleFormChange}
//                 className="w-full border px-3 py-2 rounded"
//               >
//                 {statusOptions.map((status) => (
//                   <option key={status} value={status}>{status}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 className="px-4 py-2 border rounded hover:bg-gray-100"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//               <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Save
//               </button>
//             </div>
//           </form>
//         </Modal>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Edit2, Trash2, Eye, Plus, RefreshCw, Search, Download, Mail, Phone, Building2, Calendar, TrendingUp, Users, CheckCircle2, XCircle, Clock } from "lucide-react";
import api from "@/lib/api";

export default function EnhancedLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [connectionFilter, setConnectionFilter] = useState("all");

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    phone_no: "",
    email: "",
    source: "",
    connection_type: "business",
    status: "new"
  });

  const statusOptions = ["new", "contacted", "qualified", "converted", "lost"];
  
  const statusConfig = {
    new: { color: "bg-blue-100 text-blue-800", icon: Clock },
    contacted: { color: "bg-yellow-100 text-yellow-800", icon: Phone },
    qualified: { color: "bg-purple-100 text-purple-800", icon: TrendingUp },
    converted: { color: "bg-green-100 text-green-800", icon: CheckCircle2 },
    lost: { color: "bg-red-100 text-red-800", icon: XCircle }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchQuery, statusFilter, connectionFilter]);

  const fetchLeads = async () => {
    try {
      const response = await api.get("/leads/leads/");
      setLeads(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    if (searchQuery) {
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (connectionFilter !== "all") {
      filtered = filtered.filter(lead => lead.connection_type === connectionFilter);
    }

    setFilteredLeads(filtered);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await api.delete(`/leads/leads/${id}/`);
      setLeads(leads.filter((lead) => lead.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete lead");
    }
  };

  const openModal = (mode, lead = null) => {
    setModalMode(mode);
    setSelectedLead(lead);
    if (lead) {
      setFormData({ ...lead });
    } else {
      setFormData({
        name: "",
        state: "",
        phone_no: "",
        email: "",
        source: "",
        connection_type: "business",
        status: "new"
      });
    }
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.phone_no || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      if (modalMode === "add") {
        const response = await api.post("/leads/leads/", formData);
        setLeads([...leads, response.data]);
      } else if (modalMode === "edit") {
        const response = await api.put(`/leads/leads/${selectedLead.id}/`, formData);
        setLeads(leads.map(l => l.id === selectedLead.id ? response.data : l));
      }
      setShowModal(false);
      fetchLeads(); // Refresh the list to ensure sync
    } catch (err) {
      console.error(err);
      alert("Failed to save lead");
    }
  };

  const analytics = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    converted: leads.filter((l) => l.status === "converted").length,
    lost: leads.filter((l) => l.status === "lost").length
  };

  const conversionRate = leads.length > 0 ? ((analytics.converted / leads.length) * 100).toFixed(1) : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-800 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
              <p className="mt-1 text-sm text-gray-500">Track and manage your sales pipeline</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchLeads}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={() => openModal("add")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Lead</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analytics.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{analytics.new}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">{analytics.contacted}</p>
              </div>
              <Phone className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Qualified</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">{analytics.qualified}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Converted</p>
                <p className="text-2xl font-bold text-green-600 mt-1">{analytics.converted}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conv. Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{conversionRate}%</p>
              </div>
              <div className="text-green-600 text-sm font-semibold">↑</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search leads by name, company, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
                ))}
              </select>
              <select
                value={connectionFilter}
                onChange={(e) => setConnectionFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="business">Business</option>
                <option value="home">Home</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => {
                  const StatusIcon = statusConfig[lead.status]?.icon || Clock;
                  return (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {lead.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {lead.sate || "N/A"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center gap-1">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {lead.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {lead.phone_no}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{lead.source || "N/A"}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                          {lead.connection_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[lead.status]?.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(lead.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openModal("edit", lead)}
                            className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => alert(JSON.stringify(lead, null, 2))}
                            className="text-gray-600 hover:text-gray-900 p-1 hover:bg-gray-50 rounded transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {filteredLeads.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No leads found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {modalMode === "add" ? "Add New Lead" : "Edit Lead"}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="sate"
                    value={formData.state || ""}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone_no"
                    value={formData.phone_no || ""}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source || ""}
                    onChange={handleFormChange}
                    placeholder="e.g., Website, Referral, Cold Call"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Connection Type</label>
                  <select
                    name="connection_type"
                    value={formData.connection_type}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="business">Business</option>
                    <option value="home">Home</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                  >
                    {modalMode === "add" ? "Add Lead" : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}