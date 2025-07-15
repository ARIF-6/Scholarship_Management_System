// import React from "react";
// import { FaSchool, FaHeart, FaLaptopCode } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="min-h-screen font-sans bg-gradient-to-br from-white via-blue-100 to-blue-200 py-10 px-6">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl px-8 py-10">
//         <h1 className="text-4xl font-bold text-center text-teal-900 mb-5">
//           About Our School Management System
//         </h1>
//         <p className="text-center text-gray-600 text-lg mb-8">
//           Empowering education through innovation and technology.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6 text-center">
//           <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
//             <FaSchool className="text-5xl text-teal-600 mx-auto mb-3" />
//             <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Mission</h3>
//             <p className="text-gray-600">
//               To simplify and digitize academic processes for students, teachers, and administrators.
//             </p>
//           </div>

//           <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
//             <FaLaptopCode className="text-5xl text-teal-600 mx-auto mb-3" />
//             <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Technology</h3>
//             <p className="text-gray-600">
//               Built using modern frameworks like React & Spring Boot for performance and scalability.
//             </p>
//           </div>

//           <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
//             <FaHeart className="text-5xl text-teal-600 mx-auto mb-3" />
//             <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Values</h3>
//             <p className="text-gray-600">
//               We believe in quality education, accessibility, and student-first solutions.
//             </p>
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <h2 className="text-2xl font-bold text-teal-800 mb-3">Why Choose Us?</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
//             Our system is designed to enhance the learning experience, reduce administrative burden,
//             and ensure transparency across all educational operations. From registration to tracking
//             applications, everything is just a few clicks away.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// import React from "react";
// import { FaSchool, FaHeart, FaLaptopCode } from "react-icons/fa";
// import illustration from "./images/shol.webp"; // your image here

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-50 py-16 px-6 font-sans">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Left: Text Content */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6">
//             About Our System
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed mb-10">
//             Our School Management System empowers students, teachers, and administrators by simplifying educational processes through smart, user-friendly digital tools.
//           </p>

//           {/* Icon Features */}
//           <div className="space-y-6">
//             {/* Feature 1 */}
//             <div className="flex items-start gap-4">
//               <FaSchool className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Mission</h3>
//                 <p className="text-gray-600 text-sm">
//                   To streamline and digitize academic life — putting users at the center.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex items-start gap-4">
//               <FaLaptopCode className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Technology</h3>
//                 <p className="text-gray-600 text-sm">
//                   Powered by React & Spring Boot — fast, modern, and scalable.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex items-start gap-4">
//               <FaHeart className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Values</h3>
//                 <p className="text-gray-600 text-sm">
//                   Focused on accessibility, innovation, and real impact.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Image (smaller but present) */}
//         <div className="w-full">
//           <img
//             src={illustration}
//             alt="System Illustration"
//             className="rounded-3xl shadow-lg w-full max-h-[400px] object-cover object-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import { FaSchool, FaHeart, FaLaptopCode } from "react-icons/fa";
// import illustration from "./images/bac3.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-cyan-90 to-blue-50 py-16 px-4 font-sans">
      
//       {/* ✅ Shrunk width & centered */}
//       <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        
//         {/* Left: Text Content */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6">
//             About Our System
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed mb-10">
//             Our School Management System empowers students, teachers, and administrators by simplifying educational processes through smart, user-friendly digital tools.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <FaSchool className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Mission</h3>
//                 <p className="text-gray-600 text-sm">
//                   To streamline and digitize academic life — putting users at the center.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaLaptopCode className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Technology</h3>
//                 <p className="text-gray-600 text-sm">
//                   Powered by React & Spring Boot — fast, modern, and scalable.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaHeart className="text-3xl text-teal-600 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Values</h3>
//                 <p className="text-gray-600 text-sm">
//                   Focused on accessibility, innovation, and real impact.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Image */}
//          <div>
//           <img
//             src={illustration}
//             alt="About system"
//             className="rounded-2xl shadow-lg object-cover w-full h-72"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { FaSchool, FaHeart, FaLaptopCode } from "react-icons/fa";
import illustration from "./images/bac3.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white-100 to-blue-50 py-16 px-4 font-sans">
      
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight">
            About Our System
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Our School Management System empowers students, teachers, and administrators
            by simplifying educational processes through smart, user-friendly digital tools.
          </p>

          <div className="space-y-6">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <FaSchool className="text-2xl text-teal-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To streamline and digitize academic life — putting users at the center.
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-2xl text-teal-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Technology</h3>
                <p className="text-gray-600 text-sm">
                  Powered by React & Spring Boot — fast, modern, and scalable.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex items-start gap-4">
              <FaHeart className="text-2xl text-teal-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-1">Our Values</h3>
                <p className="text-gray-600 text-sm">
                  Focused on accessibility, innovation, and real impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src={illustration}
            alt="About system"
            className="rounded-2xl shadow-lg object-cover w-full h-72 md:h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
