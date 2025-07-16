// import React, { useState } from "react";
// import API from "./Api";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     try {
//       await API.post("/auth/forgot-password", { email });
//       toast.success("📩 Reset link sent! Check your email.");
//     } catch (err) {
//       toast.error("❌ Failed to send reset link. Email may not exist.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-teal-100 px-4">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
//           Forgot Password?
//         </h2>
//         <p className="text-sm text-gray-600 text-center mb-6">
//           Enter your email and we’ll send you a reset link.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { useState } from "react";
import API from "./Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await API.post("/auth/forgot-password", { email });

      toast.success("✅ Reset link sent!");

      // 👇 Open the reset password link in a new tab
      if (response.data.debugLink) {
        window.open(response.data.debugLink, "_blank");
      }

    } catch (err) {
      const msg = err.response?.data || "Something went wrong";
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-teal-800">
          🔐 Forgot Password?
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          onClick={handleForgotPassword}
          disabled={loading}
          className={`w-full bg-teal-700 text-white font-semibold py-3 rounded-lg hover:bg-teal-800 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
