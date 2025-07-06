import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./Api";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Applicants = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Fetch users error:", error);
      toast.error("❌ Failed to fetch users");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await API.delete(`/api/users/${id}`);
      toast.success("✅ User deleted");
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Delete user error:", error);
      toast.error("❌ User is Applied & cannot be Deleted");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <div className="max-w-6xl mx-auto bg-white/70 border border-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-teal-700 drop-shadow-sm">
             Registered Users
          </h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-teal-500 hover:bg-teal-600 transition px-5 py-2 rounded-full shadow-md"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-cyan-600  text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-500">
                    🚫 No applicants found.
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50 transition`}
                  >
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
