import { Link } from "react-router-dom";
import { FaUserGraduate, FaUniversity, FaHandshake } from "react-icons/fa";
import scholarshipImage from "./images/pp.jpg";

const ModernScholarshipInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white py-16 px-6 shadow-sm border-b">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Explore Our Scholarships
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Discover opportunities tailored for ambitious students. Apply with confidence and plan your academic journey.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          
          <img src={scholarshipImage} alt="Scholarship" className="ounded-xl shadow-md" />
          {/* className="rounded-xl shadow-md"/> */}

        </div>
        <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Why Choose Our Scholarships?
          </h2>
          <ul className="space-y-4 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <FaUserGraduate className="text-green-500 mt-1" />
              For full-time students with strong academic performance.
            </li>
            <li className="flex items-start gap-3">
              <FaUniversity className="text-teal-500 mt-1" />
              Covers tuition, living costs, and academic materials.
            </li>
            <li className="flex items-start gap-3">
              <FaHandshake className="text-purple-500 mt-1" />
              Includes access to mentorship and career support.
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-center py-14">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Ready to Apply?
        </h2>
        <p className="text-md text-gray-700 mb-6">
          Take the first step toward achieving your dreams. Applications close soon!
        </p>
        <Link to="/apply">
          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition">
            Apply for Scholarship
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ModernScholarshipInfo;
