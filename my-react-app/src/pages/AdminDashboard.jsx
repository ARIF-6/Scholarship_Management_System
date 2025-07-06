// import React, { useEffect, useState } from "react";
// import { FaUsers, FaFileAlt, FaSignOutAlt, FaGraduationCap } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import API from "./Api";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [userCount, setUserCount] = useState(0);
//   const [applicationCount, setApplicationCount] = useState(0);
//   const [scholarshipCount, setScholarshipCount] = useState(0); // Placeholder for now

//   const fetchDashboardData = async () => {
//     try {
//       const userRes = await API.get("/api/admin/users/count");
//       const appRes = await API.get("/api/admin/applications/count");

//       setUserCount(userRes.data);
//       setApplicationCount(appRes.data);
//     } catch (error) {
//       console.error("Failed to fetch dashboard data", error);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const handleLogout = () => {
//     navigate("/AdminLogin");
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <aside className="w-64 bg-blue-800 text-white flex flex-col p-6 space-y-6">
//         <h1 className="text-3xl font-bold text-center mb-6">🎓 Admin</h1>
//         <nav className="space-y-4">
//           <button className="flex items-center gap-2 hover:text-yellow-300">
//             <FaGraduationCap /> Scholarships
//           </button>
//           <button
//           className="flex items-center gap-2 hover:text-yellow-300"
//           onClick={() => navigate("/admin/applicants")}>
//             <FaUsers /> Applicants
//             </button>
//              <button
//           className="flex items-center gap-2 hover:text-yellow-300"
//           onClick={() => navigate("/admin/ApplicationList")}>
//             <FaUsers /> Application List
//             </button>
         
//           <button onClick={handleLogout} className="flex items-center gap-2 hover:text-yellow-300">
//             <FaSignOutAlt /> Logout
//           </button>
//         </nav>
//       </aside>

//       <main className="flex-1 p-10">
//         <h2 className="text-2xl font-semibold mb-6">Welcome Admin 👋</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaGraduationCap className="text-blue-700 text-3xl mx-auto mb-2" />
//             <p className="text-xl font-bold">{scholarshipCount}</p>
//             <p>Scholarships</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaUsers className="text-green-700 text-3xl mx-auto mb-2" />
//             <p className="text-xl font-bold">{userCount}</p>
//             <p>Applicants</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaFileAlt className="text-purple-700 text-3xl mx-auto mb-2" />
//             <p className="text-xl font-bold">{applicationCount}</p>
//             <p>Applications</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaFileAlt,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "./Api";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [userCount, setUserCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);
  const [scholarshipCount, setScholarshipCount] = useState(0); // Future update

  const fetchDashboardData = async () => {
    try {
      const userRes = await API.get("/api/admin/users/count");
      const appRes = await API.get("/api/admin/applications/count");
      const programRes = await API.get("/api/admin/programs/count");

      setUserCount(userRes.data);
      setApplicationCount(appRes.data);
      setScholarshipCount(programRes.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    navigate("/AdminLogin");
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-teal-500 to-cyan-700 text-white p-6 flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-10"> Admin</h1>
        <nav className="space-y-4">
  <button
    onClick={() => navigate("/admin/allprograms")}      
    className="flex items-center gap-3 text-lg hover:text-yellow-300 transition duration-200"
  >
    <FaGraduationCap className="text-xl" />
    All Programs
  </button>

  <button
    onClick={() => navigate("/admin/applicants")}
    className="flex items-center gap-3 text-lg hover:text-yellow-300 transition duration-200"
  >
    <FaUsers className="text-xl" />
    Applicants
  </button>

  <button
    onClick={() => navigate("/admin/ApplicationList")}
    className="flex items-center gap-3 text-lg hover:text-yellow-300 transition duration-200"
  >
    <FaFileAlt className="text-xl" />
    Application List
  </button>

  <button
    onClick={handleLogout}
    className="flex items-center gap-3 text-lg hover:text-yellow-300 transition duration-200 mt-auto"
  >
    <FaSignOutAlt className="text-xl" />
    Logout
  </button>
</nav>

      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Welcome back, Admin 👋
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Scholarships */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaGraduationCap className="text-teal-700 text-4xl mb-3 mx-auto" />
            <p className="text-center text-2xl font-bold text-blue-900">
              {scholarshipCount}
            </p>
            <p className="text-center text-gray-600">Programs</p>
          </div>

          {/* Applicants */}
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaUsers className="text-green-700 text-4xl mb-3 mx-auto" />
            <p className="text-center text-2xl font-bold text-green-900">
              {userCount}
            </p>
            <p className="text-center text-gray-600">Applicants</p>
          </div>

          {/* Applications */}
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaFileAlt className="text-purple-700 text-4xl mb-3 mx-auto" />
            <p className="text-center text-2xl font-bold text-purple-900">
              {applicationCount}
            </p>
            <p className="text-center text-gray-600">Applications</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
