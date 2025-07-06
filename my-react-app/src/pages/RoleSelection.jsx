import { useNavigate } from "react-router-dom";
import { FaUser, FaUserShield } from "react-icons/fa";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-teal-800">Welcome 🎓</h1>
        <p className="text-gray-600 text-lg">Please choose how you want to log in:</p>

        <div className="flex flex-col gap-6">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold py-3 rounded-lg transition duration-300"
          >
            <FaUser className="text-2xl" />
            Login as User
          </button>

          <button
            onClick={() => navigate("/admin/login")}
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold py-3 rounded-lg transition duration-300"
          >
            <FaUserShield className="text-2xl" />
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
