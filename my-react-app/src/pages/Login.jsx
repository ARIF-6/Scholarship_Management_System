import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import API from "./Api";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await API.post("/auth/login", formData);
      const { token, role } = response.data; // Assuming the API returns the user's role

      // Check if the role is USER
      if (role !== "USER") {
        toast.error("Access denied. This login is for regular users only.");
        return;
      }

      toast.success("Login successful!");
      localStorage.setItem("role", role);  // Store the role from response
      login(token, role);  // Pass the role to the login function
      navigate("/Home"); // Redirect to scholarship info for regular users
    } catch (error) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-teal-300 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 space-y-6 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center text-teal-800">
          🔐 Login to Your Account
        </h2>
        <p className="text-center text-gray-600">
          Access your scholarship dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
           {/* 🔗 Forgot Password link */}
           <p className="text-sm text-right text-teal-600 hover:underline cursor-pointer">
            <a href="/forgot-password">Forgot Password?</a></p>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : " Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 italic">
          Don't have an account?{" "}
          <a href="/register" className="text-teal-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;