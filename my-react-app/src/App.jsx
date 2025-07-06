import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import ScholarshipInfo from "./pages/ScholarshipInfo";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Applicants from "./pages/Applicants";
import ApplicationList from "./pages/ApplicationList";
import RoleSelection from "./pages/RoleSelection";
import Navbar from "./assets/components/Navbar";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import MyPrograms from "./pages/MyPrograms";
import AllPrograms from "./pages/AllPrograms";

function App() {
  return (
    <>
     
      <Navbar />

      {/* ✅ Main app routing */}
      <Routes>
      <Route path="/" element={<RoleSelection  />} />
      <Route path="/Home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/ScholarshipInfo" element={<ScholarshipInfo />} />
        <Route path="/About" element={<About />} />
       <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User protected routes */}
        <Route
          path="/apply"
          element={
            <ProtectedRoute role="USER">
              <Apply />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="USER">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
        path="/user/myprograms"
        element={
        <ProtectedRoute role="USER">
          <MyPrograms />
          </ProtectedRoute>
          }
           />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard/>
            </ProtectedRoute>
          }
        />
        <Route path="/admin/allprograms"
        element={
        <ProtectedRoute role="ADMIN">
          <AllPrograms />
          </ProtectedRoute>
        }
        />

        <Route
          path="/admin/applicants"
          element={
            <ProtectedRoute role="ADMIN">
              <Applicants />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/applicationlist"
          element={
            <ProtectedRoute role="ADMIN">
              <ApplicationList />
            </ProtectedRoute>
          }
        />

        <Route path="/admin/all-programs" element={<ProtectedRoute role="ADMIN"><AllPrograms /></ProtectedRoute>} />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
       <ToastContainer /> 
    </>
    
  );
}

export default App;
