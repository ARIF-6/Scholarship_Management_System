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

  const validateForm = () => {
    const { fullName, email, dateOfBirth, institution, gpa, personalStatement } = form;

    if (!fullName || !email || !dateOfBirth || !institution || !gpa || !personalStatement) {
      toast.error("❌ All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("❌ Enter a valid email address.");
      return false;
    }

    const dob = new Date(dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 21) {
      toast.error("You must be at least 21 years old.");
      return false;
    }

    return true;
  };

  const handleApply = async () => {
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      await API.post(`/api/applications/apply/${selectedProgram.id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("🎉 Application submitted successfully!");
      setSelectedProgram(null);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to submit application.");
    }
  };

  const filteredPrograms = programs.filter((p) =>
    `${p.title} ${p.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-50 p-6">
      <ToastContainer />

      <h1 className="text-4xl font-bold text-center text-teal-800 mb-10">
        Apply for a Scholarship
      </h1>

      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search for a scholarship..."
          className="w-full p-4 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Search Results or Help Section */}
      {searchQuery.trim() === "" ? (
        <div className="text-center space-y-10 text-gray-800">
          <div>
            <p className="text-lg font-medium mb-3">Popular Categories:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Science", "Business", "Engineering", "Arts", "Technology"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/70 p-6 rounded-2xl shadow-md max-w-3xl mx-auto border">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">📝 How to Apply</h3>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaSearch className="text-teal-600" /> Search and select a scholarship
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-teal-600" /> Fill out your application form
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-teal-600" /> Submit and track your status
              </li>
            </ul>
          </div>
        </div>
      ) : filteredPrograms.length > 0 ? (
        <ul className="max-w-4xl mx-auto divide-y bg-white/70 rounded-2xl shadow overflow-hidden">
          {filteredPrograms.map((program) => (
            <li
              key={program.id}
              className="p-6 flex justify-between items-start hover:bg-blue-50 transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-1">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {program.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedProgram(program)}
                className="ml-4 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700"
              >
                Apply
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-8 font-medium">
          No scholarship programs found.
        </p>
      )}

      {/* Modal Form */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl relative">
            <button
              className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setSelectedProgram(null)}
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">
              ✍️ Apply to <span className="text-indigo-600">{selectedProgram.title}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <InputField
                icon={<FaUser />}
                placeholder="Full Name"
                value={form.fullName}
                onChange={(v) => setForm({ ...form, fullName: v })}
              />
              <InputField
                icon={<FaEnvelope />}
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <InputField
                icon={<FaRegCalendarAlt />}
                type="date"
                value={form.dateOfBirth}
                onChange={(v) => setForm({ ...form, dateOfBirth: v })}
              />
              <InputField
                icon={<FaSchool />}
                placeholder="Institution"
                value={form.institution}
                onChange={(v) => setForm({ ...form, institution: v })}
              />
              <InputField
                icon={<FaStar />}
                placeholder="GPA"
                value={form.gpa}
                onChange={(v) => setForm({ ...form, gpa: v })}
              />

              <div className="md:col-span-2">
                <textarea
                  placeholder="📜 Personal Statement"
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
                className="px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-emerald-700"
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

// Reusable InputField with icon
const InputField = ({ icon, placeholder, value, onChange, type = "text" }) => (
  <div className="relative">
    <span className="absolute left-3 top-3.5 text-teal-600">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="pl-10 py-3 w-full rounded-xl bg-white/60 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Apply;
