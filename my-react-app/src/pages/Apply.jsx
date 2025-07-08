import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./Api";
import {
  FaUniversity,
  FaUser,
  FaEnvelope,
  FaSchool,
  FaStar,
  FaRegCalendarAlt,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
  const [programs, setPrograms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    institution: "",
    gpa: "",
    personalStatement: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await API.get("/api/admin/programs");
      setPrograms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");
      await API.post(`/api/applications/apply/${selectedProgram.id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("🎉 Application submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setSelectedProgram(null);
      setTimeout(() => navigate("/dashboard"), 2200);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to apply.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const filteredPrograms = programs.filter((p) =>
    `${p.title} ${p.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-cyan-200 to-blue-100 p-6">
      <ToastContainer />
      <h1 className="text-5xl font-extrabold text-center mb-10 text-teal-800 tracking-tight drop-shadow-xl">
        🎓 Apply for a Scholarship
      </h1>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="🔍 Search for scholarship programs..."
          className="w-full p-4 rounded-full shadow-xl border border-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Empty State */}
      {searchQuery.trim() === "" ? (
        <div className="text-center text-gray-700 mt-10 space-y-10">

          {/* Suggested Tags */}
          <div>
            <p className="text-lg font-semibold mb-3">Popular Categories:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Science", "Engineering", "Business", "Technology", "Arts"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white/60 p-6 rounded-2xl shadow-md max-w-3xl mx-auto border border-white/40">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              📝 How to Apply
            </h3>
            <ul className="space-y-3 text-gray-800 text-left text-base">
              <li className="flex items-center gap-3">
                <FaSearch className="text-teal-600" />
                <span>Search and select a scholarship program</span>
              </li>
              <li className="flex items-center gap-3">
                <FaArrowRight className="text-teal-600" />
                <span>Fill in your personal and academic details</span>
              </li>
              <li className="flex items-center gap-3">
                <FaArrowRight className="text-teal-600" />
                <span>Submit and track your application</span>
              </li>
            </ul>
          </div>
        </div>
      ) : filteredPrograms.length > 0 ? (
        <ul className="max-w-4xl mx-auto divide-y divide-indigo-200 bg-white/60 rounded-3xl shadow-xl overflow-hidden">
          {filteredPrograms.map((program) => (
            <li
              key={program.id}
              className="p-6 hover:bg-indigo-50 transition-all flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold text-teal-800 mb-1">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {program.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedProgram(program)}
                className="ml-4 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition whitespace-nowrap"
              >
                Apply
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-400 mt-10 text-lg font-medium">
          ❌ No programs found matching your search.
        </div>
      )}

      {/* Application Form Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white/80 rounded-3xl shadow-2xl p-10 w-full max-w-3xl relative animate-fadeIn border border-white/30 backdrop-blur-xl">
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-3xl"
              onClick={() => setSelectedProgram(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-800 mb-8 tracking-tight">
              ✍️ Apply to{" "}
              <span className="text-indigo-600">{selectedProgram.title}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-4 text-teal-600" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-4 text-teal-600" />
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <FaRegCalendarAlt className="absolute left-3 top-4 text-teal-600" />
                <input
                  type="date"
                  className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.dateOfBirth}
                  onChange={(e) =>
                    setForm({ ...form, dateOfBirth: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <FaSchool className="absolute left-3 top-4 text-teal-600" />
                <input
                  type="text"
                  placeholder="Institution"
                  className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.institution}
                  onChange={(e) =>
                    setForm({ ...form, institution: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <FaStar className="absolute left-3 top-4 text-teal-600" />
                <input
                  type="text"
                  placeholder="GPA"
                  className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.gpa}
                  onChange={(e) =>
                    setForm({ ...form, gpa: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  placeholder="📜 Write your personal statement..."
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={form.personalStatement}
                  onChange={(e) =>
                    setForm({ ...form, personalStatement: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:from-emerald-600 hover:to-teal-700 transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
