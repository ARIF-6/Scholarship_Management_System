import React, { useEffect, useState } from "react";
import API from "./Api";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllPrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [editingProgram, setEditingProgram] = useState(null);
  const [editedData, setEditedData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const parsed = new Date(date);
    if (isNaN(parsed)) return "";
    return parsed.toISOString().split("T")[0];
  };

  const fetchPrograms = async () => {
    try {
      const res = await API.get("/api/admin/programs");
      setPrograms(res.data);
    } catch {
      toast.error("Failed to fetch programs");
    }
  };

  const handleInputChange = (e) => {
    setNewProgram({ ...newProgram, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleAddProgram = async () => {
    try {
      const formatted = {
        ...newProgram,
        startDate: formatDate(newProgram.startDate),
        endDate: formatDate(newProgram.endDate),
      };
      const res = await API.post("/api/admin/programs", formatted);
      toast.success("Program added");
      setPrograms([...programs, res.data]);
      setNewProgram({ title: "", description: "", startDate: "", endDate: "" });
    } catch {
      toast.error("Add failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this program?")) return;
    try {
      await API.delete(`/api/admin/programs/${id}`);
      toast.success("Program deleted");
      setPrograms(programs.filter((p) => p.id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  const openEditModal = (program) => {
    setEditingProgram(program);
    setEditedData({ ...program });
  };

  const saveChanges = async () => {
    try {
      const formatted = {
        ...editedData,
        startDate: formatDate(editedData.startDate),
        endDate: formatDate(editedData.endDate),
      };
      const res = await API.put(`/api/admin/programs/${editingProgram.id}`, formatted);
      toast.success("Program updated");
      setPrograms(programs.map((p) => (p.id === editingProgram.id ? res.data : p)));
      setEditingProgram(null);
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-10">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">🎓 Scholarship Programs</h2>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-teal-500 text-white hover:bg-teal-600 transition px-5 py-2 rounded-full shadow-md"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Program Table */}
      <div className="overflow-x-auto shadow-2xl rounded-2xl backdrop-blur-md bg-white/60 ring-1 ring-gray-200">
        <table className="w-full text-sm text-gray-800">
          <thead className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Start Date</th>
              <th className="px-6 py-4 text-left">End Date</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {programs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No programs available.
                </td>
              </tr>
            ) : (
              programs.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{p.id}</td>
                  <td className="px-6 py-3 font-medium">{p.title}</td>
                  <td className="px-6 py-3">{p.description}</td>
                  <td className="px-6 py-3">{p.startDate}</td>
                  <td className="px-6 py-3">{p.endDate}</td>
                  <td className="px-6 py-3 text-center space-x-3">
                    <button onClick={() => openEditModal(p)} className="text-indigo-600 hover:text-indigo-800">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Program Panel */}
      <div className="mt-12 bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">➕ Add New Program</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            value={newProgram.title}
            onChange={handleInputChange}
            placeholder="Program Title"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            name="description"
            value={newProgram.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="date"
            name="startDate"
            value={newProgram.startDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="date"
            name="endDate"
            value={newProgram.endDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          onClick={handleAddProgram}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
        >
          Add Program
        </button>
      </div>

      {/* Edit Modal */}
      {editingProgram && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md animate-fade-in-up">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">✏️ Edit Program</h3>
            <input
              type="text"
              name="title"
              value={editedData.title}
              onChange={handleEditChange}
              placeholder="Title"
              className="w-full mb-3 border p-3 rounded"
            />
            <input
              type="text"
              name="description"
              value={editedData.description}
              onChange={handleEditChange}
              placeholder="Description"
              className="w-full mb-3 border p-3 rounded"
            />
            <input
              type="date"
              name="startDate"
              value={editedData.startDate}
              onChange={handleEditChange}
              className="w-full mb-3 border p-3 rounded"
            />
            <input
              type="date"
              name="endDate"
              value={editedData.endDate}
              onChange={handleEditChange}
              className="w-full mb-3 border p-3 rounded"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingProgram(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPrograms;
