import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; 
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      logout();
      navigate("RoleSelection");
    }
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaGraduationCap className="text-yellow-300" />
          SchoolSys
        </Link>

        <div className="space-x-6 text-md font-medium hidden md:flex">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact Us</Link>

          {isAuthenticated && (
            <>
              <Link to="/apply" className="hover:text-yellow-300 transition">Apply</Link>
              <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="hover:text-yellow-300 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
