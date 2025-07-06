import React from "react";
import { FaSchool, FaHeart, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-blue-100 to-blue-200 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl px-8 py-10">
        <h1 className="text-4xl font-bold text-center text-teal-900 mb-5">
          About Our School Management System
        </h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Empowering education through innovation and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
            <FaSchool className="text-5xl text-teal-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Mission</h3>
            <p className="text-gray-600">
              To simplify and digitize academic processes for students, teachers, and administrators.
            </p>
          </div>

          <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
            <FaLaptopCode className="text-5xl text-teal-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Technology</h3>
            <p className="text-gray-600">
              Built using modern frameworks like React & Spring Boot for performance and scalability.
            </p>
          </div>

          <div className="p-5 rounded-xl shadow hover:shadow-xl transition bg-blue-50">
            <FaHeart className="text-5xl text-teal-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Our Values</h3>
            <p className="text-gray-600">
              We believe in quality education, accessibility, and student-first solutions.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-3">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            Our system is designed to enhance the learning experience, reduce administrative burden,
            and ensure transparency across all educational operations. From registration to tracking
            applications, everything is just a few clicks away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
