// import { Link } from "react-router-dom";
// import {
//   FaUserGraduate,
//   FaUniversity,
//   FaHandshake,
// } from "react-icons/fa";
// import scholarshipImage from "./images/pp.jpg";

// const ModernScholarshipInfo = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 text-gray-900">
//       {/* Hero Section */}
//       <div className="grid md:grid-cols-2 gap-6 px-10 md:px-20 py-20 items-center bg-gradient-to-r from-teal-600 to-indigo-700 text-white">
//         <div className="space-y-6">
//           <h1 className="text-5xl font-extrabold leading-tight drop-shadow-xl">
//             Unlock Your Academic Future
//           </h1>
//           <p className="text-lg text-white/90">
//             Explore scholarships designed to empower outstanding students — covering your education, your growth, and your goals.
//           </p>
//           <Link
//             to="/apply"
//             className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
//           >
//             Apply Now
//           </Link>
//         </div>
//         <img
//           src={scholarshipImage}
//           alt="Scholarship"
//           className="rounded-3xl shadow-2xl w-full h-full object-cover"
//         />
//       </div>

//       {/* Features Section */}
//       <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-14">
//           Why Choose Our Scholarships?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Card 1 */}
//           <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
//             <div className="text-4xl text-green-500 mb-4">
//               <FaUserGraduate />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Top Talent Focus</h3>
//             <p className="text-gray-600 text-sm">
//               Perfect for high-achieving, full-time students with academic excellence.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
//             <div className="text-4xl text-blue-500 mb-4">
//               <FaUniversity />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
//             <p className="text-gray-600 text-sm">
//               Includes tuition fees, living expenses, and learning materials.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
//             <div className="text-4xl text-purple-500 mb-4">
//               <FaHandshake />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Career & Mentorship</h3>
//             <p className="text-gray-600 text-sm">
//               Connect with experienced mentors and join a supportive academic community.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Final CTA */}
//       <div className="bg-cyan-700 py-14 text-center text-white">
//         <h3 className="text-2xl font-semibold mb-4">
//           Are you ready to elevate your journey?
//         </h3>
//         <Link
//           to="/apply"
//           className="inline-block bg-white text-teal-700 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition"
//         >
//           Start Your Application
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ModernScholarshipInfo;


import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaUniversity,
  FaHandshake,
} from "react-icons/fa";
import scholarshipImage from "./images/why2.jpg";

const ModernScholarshipInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-20 items-center bg-white">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-teal-700">
            Unlock Your Academic Future
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Explore scholarships crafted to support your education, growth, and goals.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-teal-700 transition"
          >
            Apply Now
          </Link>
        </div>
        <div className="relative">
          <img
            src={scholarshipImage}
            alt="Scholarship"
            className="rounded-2xl shadow-lg object-cover w-full h-96"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-14">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature Card */}
          {[
            {
              icon: <FaUserGraduate />,
              title: "Top Talent Focus",
              desc: "Ideal for full-time, high-achieving students driven by academic excellence.",
              color: "text-emerald-500",
            },
            {
              icon: <FaUniversity />,
              title: "Full Coverage",
              desc: "Covers tuition, living expenses, and educational resources.",
              color: "text-blue-500",
            },
            {
              icon: <FaHandshake />,
              title: "Mentorship & Careers",
              desc: "Join a network of mentors and career-driven scholars.",
              color: "text-purple-500",
            },
          ].map(({ icon, title, desc, color }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className={`text-3xl mb-4 ${color}`}>{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModernScholarshipInfo;
