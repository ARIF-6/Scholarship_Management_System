// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

// const Orientation = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-16 text-gray-800">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
//             🎓 Welcome to Orientation Day!
//           </h1>
//           <p className="text-lg text-gray-600">
//             Get ready to begin your scholarship journey with us. Meet mentors, learn the rules, and set yourself up for success!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 text-center">
//           <div className="bg-blue-100 rounded-xl p-6 shadow hover:shadow-md transition">
//             <FaCalendarAlt className="text-3xl text-blue-700 mx-auto mb-2" />
//             <p className="font-semibold">Date</p>
//             <p>August 31, 2025</p>
//           </div>
//           <div className="bg-blue-100 rounded-xl p-6 shadow hover:shadow-md transition">
//             <FaClock className="text-3xl text-blue-700 mx-auto mb-2" />
//             <p className="font-semibold">Time</p>
//             <p>10:00 AM – 12:00 PM</p>
//           </div>
//           <div className="bg-blue-100 rounded-xl p-6 shadow hover:shadow-md transition">
//             <FaMapMarkerAlt className="text-3xl text-blue-700 mx-auto mb-2" />
//             <p className="font-semibold">Location</p>
//             <p>Online via Zoom</p>
//             <a href="https://zoom.us/j/your-meeting-link" className="text-blue-600 underline text-sm mt-2 block">
//               Join Zoom Meeting
//             </a>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
//             <FaInfoCircle /> What to Expect
//           </h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
//             <li>Introduction to scholarship guidelines and policies</li>
//             <li>Meet your mentors and fellow scholars</li>
//             <li>Q&A session and resource sharing</li>
//             <li>Tools you'll use during the program</li>
//           </ul>
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
//             <FaCheckCircle /> Orientation Agenda
//           </h2>
//           <div className="bg-blue-50 rounded-xl p-4 shadow">
//             <ul className="space-y-2 text-gray-700 text-sm md:text-base">
//               <li><strong>10:00 AM</strong> — Welcome & Opening Speech</li>
//               <li><strong>10:15 AM</strong> — Scholarship Overview</li>
//               <li><strong>10:45 AM</strong> — Meet Your Mentors</li>
//               <li><strong>11:15 AM</strong> — Platform Walkthrough</li>
//               <li><strong>11:45 AM</strong> — Q&A + Closing</li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full shadow-md transition">
//             I'm Ready! 🎉
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orientation;


import { FaChalkboardTeacher, FaRegCalendarCheck, FaLaptopHouse, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import orientationImg from "./images/back2.jpg";

const Orientation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 space-y-14">
        {/* Header */}
      <div className="text-center space-y-6">
  <h1 className="text-5xl font-extrabold text-cyan-900">
    🎓 ORIENTATION DAY:  Your Journey!
  </h1>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
    Welcome to our scholarship community! Discover all you need to begin your journey with clarity, confidence, and a spark of excitement.
  </p>
</div>


        {/* Hero Image */}
        <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
         <img
         src={orientationImg}
         alt="orientation"
         className="w-full h-full object-cover"
         />

        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-cyan-200 rounded-xl p-6 shadow-md">
            <FaRegCalendarCheck className="text-3xl text-teal-700 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-teal-800">Date</h3>
            <p className="text-gray-600">August 31, 2025</p>
          </div>
          <div className="bg-cyan-200 rounded-xl p-6 shadow-md">
            <FaLaptopHouse className="text-3xl text-teal-700 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-teal-800">Location</h3>
            <p className="text-gray-600">Online via Zoom</p>
            <a
              href="https://zoom.us/j/your-meeting-link"
              className="text-blue-600 underline text-sm mt-1 block"
              target="_blank"
              rel="noreferrer"
            >
              Join Meeting
            </a>
          </div>
          <div className="bg-cyan-200 rounded-xl p-6 shadow-md">
            <FaChalkboardTeacher className="text-3xl text-teal-700 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-teal-800">Duration</h3>
            <p className="text-gray-600">10:00 AM - 12:00 PM</p>
          </div>
        </div>

        {/* What to Expect */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-800 flex items-center gap-2">
            <FaUserFriends /> What You'll Learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 pl-2">
            <li>Overview of your scholarship benefits and expectations</li>
            <li>Meet your mentors, team leaders, and fellow scholars</li>
            <li>Platform training & communication guidelines</li>
            <li>Resources, tools, and roadmap to success</li>
          </ul>
        </div>

        {/* Agenda */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-800">📅 Agenda</h2>
          <div className="bg-blue-50 rounded-xl p-6 shadow space-y-2 text-gray-700 text-md">
            <p><strong>10:00 AM:</strong> Welcome & Opening</p>
            <p><strong>10:15 AM:</strong> Scholarship Overview & Policies</p>
            <p><strong>10:45 AM:</strong> Meet the Mentors</p>
            <p><strong>11:15 AM:</strong> Tools Walkthrough</p>
            <p><strong>11:45 AM:</strong> Q&A + Final Announcements</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-10">
          <Link to="/dashboard">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition">
               Got It! Take Me Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orientation;
