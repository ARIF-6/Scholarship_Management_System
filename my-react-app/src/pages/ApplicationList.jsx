// import { useEffect, useState } from "react";
// import API from "./Api";
// import { toast } from "react-toastify";
// import { FaTrash, FaEdit } from "react-icons/fa";

// const ApplicationList = () => {
//   const [applications, setApplications] = useState([]);
//   const [editingApp, setEditingApp] = useState(null);
//   const [editedStatus, setEditedStatus] = useState("");

//   const fetchApplications = async () => {
//     try {
//       const res = await API.get("/api/admin/applications");
//       setApplications(res.data);
//     } catch (err) {
//       toast.error("Failed to load applications");
//     }
//   };

//   const openEditModal = (app) => {
//     setEditingApp(app);
//     setEditedStatus(app.status);
//   };

//   const handleStatusChange = (e) => {
//     setEditedStatus(e.target.value);
//   };

//   const saveStatus = async () => {
//     try {
//       const res = await API.put(`/api/admin/applications/${editingApp.id}`, {
//         status: editedStatus,
//       });
//       toast.success("Status updated");
//       setApplications((prev) =>
//         prev.map((app) => (app.id === editingApp.id ? res.data : app))
//       );
//       setEditingApp(null);
//     } catch (err) {
//       toast.error("Failed to update status");
//     }
//   };

//   const deleteApplication = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this application?")) return;
//     try {
//       await API.delete(`/api/admin/applications/${id}`);
//       toast.success("Application deleted");
//       setApplications(applications.filter((app) => app.id !== id));
//     } catch {
//       toast.error("Failed to delete application");
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   return (
//    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         {/* Heading + Back Button */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//           <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">
//             👥 Applicants
//           </h2>
//           <button
//             onClick={() => navigate("/admin/dashboard")}
//             className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md shadow transition"
//           >
//             ← Back to Dashboard
//           </button>
//         </div>




//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">📄 All Applications</h2>
//       <table className="w-full table-auto border-collapse shadow-md">
//         <thead>
//           <tr className="bg-blue-100">
//             <th className="p-3 border">ID</th>
//             <th className="p-3 border">Name</th>
//             <th className="p-3 border">Email</th>
//             <th className="p-3 border">Program</th>
//             <th className="p-3 border">Status</th>
//             <th className="p-3 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id} className="text-center hover:bg-gray-50">
//               <td className="p-2 border">{app.id}</td>
//               <td className="p-2 border">{app.name}</td>
//               <td className="p-2 border">{app.email}</td>
//               <td className="p-2 border">{app.program}</td>
//               <td className="p-2 border">
//                 <span
//                   className={`px-2 py-1 rounded text-white text-sm font-semibold ${
//                     app.status === "APPROVED"
//                       ? "bg-green-600"
//                       : app.status === "REJECTED"
//                       ? "bg-red-600"
//                       : "bg-yellow-500"
//                   }`}
//                 >
//                   {app.status}
//                 </span>
//               </td>
//               <td className="p-2 border space-x-2">
//                 <button
//                   onClick={() => openEditModal(app)}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button
//                   onClick={() => deleteApplication(app.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* 🌟 Styled Edit Modal */}
//       {editingApp && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-gradient-to-br from-blue-100 via-white to-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200">
//             <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
//               ✏️ Edit Application Status
//             </h3>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 New Status
//               </label>
//               <select
//                 value={editedStatus}
//                 onChange={handleStatusChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//               >
//                 <option value="PENDING">Pending</option>
//                 <option value="ACCEPTED">Approved</option>
//                 <option value="REJECTED">Rejected</option>
//               </select>
//             </div>
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setEditingApp(null)}
//                 className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveStatus}
//                 className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicationList;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "./Api";
// import { toast } from "react-toastify";
// import { FaTrash, FaEdit } from "react-icons/fa";

// const ApplicationList = () => {
//   const [applications, setApplications] = useState([]);
//   const [editingApp, setEditingApp] = useState(null);
//   const [editedStatus, setEditedStatus] = useState("");

//   const navigate = useNavigate();

//   const fetchApplications = async () => {
//     try {
//       const res = await API.get("/api/admin/applications");
//       setApplications(res.data);
//     } catch (err) {
//       toast.error("❌ Failed to load applications");
//     }
//   };

//   const openEditModal = (app) => {
//     setEditingApp(app);
//     setEditedStatus(app.status);
//   };

//   const handleStatusChange = (e) => {
//     setEditedStatus(e.target.value);
//   };

//   const saveStatus = async () => {
//     try {
//       const res = await API.put(`/api/admin/applications/${editingApp.id}`, {
//         status: editedStatus,
//       });
//       toast.success("✅ Status updated");
//       setApplications((prev) =>
//         prev.map((app) => (app.id === editingApp.id ? res.data : app))
//       );
//       setEditingApp(null);
//     } catch (err) {
//       toast.error("❌ Failed to update status");
//     }
//   };

//   const deleteApplication = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this application?")) return;
//     try {
//       await API.delete(`/api/admin/applications/${id}`);
//       toast.success("🗑️ Application deleted");
//       setApplications(applications.filter((app) => app.id !== id));
//     } catch {
//       toast.error("❌ Failed to delete application");
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   return (
//     <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         {/* Header and Back Button */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//           <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">📄 Applications</h2>
//           <button
//             onClick={() => navigate("/admin/dashboard")}
//             className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md shadow transition"
//           >
//             ← Back to Dashboard
//           </button>
//         </div>

//         {/* Application Table */}
//         <div className="overflow-x-auto rounded-lg border border-gray-200">
//           <table className="min-w-full text-sm text-gray-800 bg-white">
//             <thead className="bg-blue-100 text-blue-900 font-medium">
//               <tr>
//                 <th className="p-3 border">ID</th>
//                 <th className="p-3 border">Name</th>
//                 <th className="p-3 border">Email</th>
//                 <th className="p-3 border">Program</th>
//                 <th className="p-3 border">Status</th>
//                 <th className="p-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app) => (
//                 <tr key={app.id} className="text-center hover:bg-gray-50">
//                   <td className="p-2 border">{app.id}</td>
//                   <td className="p-2 border">{app.name}</td>
//                   <td className="p-2 border">{app.email}</td>
//                   <td className="p-2 border">{app.program}</td>
//                   <td className="p-2 border">
//                     <span
//                       className={`px-2 py-1 rounded text-white text-sm font-semibold ${
//                         app.status === "ACCEPTED"
//                           ? "bg-green-600"
//                           : app.status === "REJECTED"
//                           ? "bg-red-600"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>
//                   <td className="p-2 border space-x-2">
//                     <button
//                       onClick={() => openEditModal(app)}
//                       className="text-blue-600 hover:text-blue-800"
//                       title="Edit Status"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => deleteApplication(app.id)}
//                       className="text-red-600 hover:text-red-800"
//                       title="Delete"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* 🌟 Edit Modal */}
//       {editingApp && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-gradient-to-br from-blue-100 via-white to-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200">
//             <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
//               ✏️ Edit Application Status
//             </h3>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 New Status
//               </label>
//               <select
//                 value={editedStatus}
//                 onChange={handleStatusChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//               >
//                 <option value="PENDING">Pending</option>
//                 <option value="ACCEPTED">Approved</option>
//                 <option value="REJECTED">Rejected</option>
//               </select>
//             </div>
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setEditingApp(null)}
//                 className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveStatus}
//                 className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicationList;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./Api";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [editingApp, setEditingApp] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");

  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const res = await API.get("/api/applications/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setApplications(res.data);
    } catch (err) {
      toast.error("❌ Failed to load applications");
    }
  };

  const openEditModal = (app) => {
    setEditingApp(app);
    setEditedStatus(app.status);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  const saveStatus = async () => {
    try {
      const res = await API.put(
        `/api/admin/applications/${editingApp.id}`,
        { status: editedStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("✅ Status updated");
      setApplications((prev) =>
        prev.map((app) => (app.id === editingApp.id ? res.data : app))
      );
      setEditingApp(null);
    } catch (err) {
      toast.error("❌ Failed to update status");
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await API.delete(`/api/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("🗑️ Application deleted");
      setApplications(applications.filter((app) => app.id !== id));
    } catch {
      toast.error("❌ Failed to delete application");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        {/* Header and Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-700">Applications</h2>
          <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-teal-500 text-white hover:bg-teal-600 transition px-5 py-2 rounded-full shadow-md"
        >
          ← Back to Dashboard
        </button>
        </div>

        {/* Application Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-gray-800 bg-white">
            <thead className="bg-cyan-400 text-teal-900 font-medium">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Program</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{app.id}</td>
                  <td className="p-2 border">{app.fullName}</td>
                  <td className="p-2 border">{app.email}</td>
                  <td className="p-2 border">{app.program?.title || "Unknown Program"}</td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm font-semibold ${
                        app.status === "ACCEPTED"
                          ? "bg-green-600"
                          : app.status === "REJECTED"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => openEditModal(app)}
                      className="text-teal-600 hover:text-blue-800"
                      title="Edit Status"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🌟 Edit Modal */}
      {editingApp && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-300 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              ✏️ Edit Application Status
            </h3>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                New Status
              </label>
              <select
                value={editedStatus}
                onChange={handleStatusChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="PENDING">Pending</option>
                <option value="ACCEPTED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setEditingApp(null)}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={saveStatus}
                className="px-6 py-2 bg-cyan-800 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
