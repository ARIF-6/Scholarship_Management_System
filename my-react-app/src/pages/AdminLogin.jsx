// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import API from "./Api";
// import "react-toastify/dist/ReactToastify.css";

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

// const handleLogin = async (e) => {
//   e.preventDefault();

//   if (!formData.username || !formData.password) {
//     toast.error("Please fill in all fields");
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await API.post("/api/admin/login", formData);
//     if (response.data === "Login successful!") {
//       toast.success("Login successful!");
//       localStorage.setItem("role", "ADMIN");

//       navigate("/admin/AdminDashboard");
//     } else {
//       toast.error("Invalid credentials");
//     }
//   } catch (error) {
//     const message =
//       error?.response?.data?.message || "Login failed. Please try again.";
//     toast.error(message);
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-800">Admin Login</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           className="w-full border px-4 py-2 rounded"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full border px-4 py-2 rounded"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
























// // src/pages/AdminLogin.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import API from "./Api";
// import { useAuth, Roles } from "../AuthContext.jsx";
// import "react-toastify/dist/ReactToastify.css";

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await API.post("/api/admin/login", formData);
//       const { role, token } = res.data;

//       if (role === Roles.ADMIN && token) {
//         login(token, Roles.ADMIN);
//         toast.success("Admin login successful!");
//         navigate("/admin/dashboard");
//       } else {
//         toast.error("Invalid credentials or not an admin");
//       }
//     } catch (err) {
//       const msg = err?.response?.data?.message || "Login failed. Please try again.";
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-800">Admin Login</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           className="w-full border px-4 py-2 rounded"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full border px-4 py-2 rounded"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;









import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "./Api";
import { useAuth, Roles } from "../AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/api/admin/login", formData);
      const { role, token } = res.data;

      if (role === Roles.ADMIN && token) {
        login(token, Roles.ADMIN);
        toast.success("Admin login successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid Username or password");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Login failed. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-teal-500">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-lg shadow-lg space-y-6 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-teal-800">Admin Login</h2>
        <p className="text-center text-gray-600">Access your dashboard securely</p>
        
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* <p className="text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p> */}
      </form>
    </div>
  );
};

export default AdminLogin;