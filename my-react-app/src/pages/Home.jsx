import React, { useEffect } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import ScholarshipInfo from "./ScholarshipInfo.jsx";
import bgImg from "./images/pic.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section
    className="relative min-h-screen flex items-center justify-center bg-center bg-cover px-6"
    style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10 text-center max-w-3xl p-8 rounded-xl bg-white/30 backdrop-blur-sm text-gray-900">
      <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight tracking-tight">
        Empower Your Future<br />
        <span className="text-teal-700">With Scholarships</span></h1>
        <p className="mt-6 text-lg md:text-xl text-gray-800 font-normal">
          Discover academic opportunities tailored for you. Apply with ease, track with confidence.
          </p>
          <a href="#features"
          className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-yellow-500 text-white rounded-full text-lg font-medium hover:scale-105 transition transform duration-300 shadow-md"
          >
            Explore Opportunities
            </a></div>
      </section>


      {/* Features */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-900 mb-12">
            Who Is This For?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <FaUserGraduate className="text-4xl text-teal-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-teal-900 mb-2">Students</h3>
              <p className="text-gray-600 text-center">
                Apply, track, and manage your scholarship applications with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <FaChalkboardTeacher className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-purple-800 mb-2">Faculty</h3>
              <p className="text-gray-600 text-center">
                Review applications, manage data, and guide students efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <FaRocket className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-green-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-center">
                Simplifying education funding and making opportunities accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div id="About-section">
        <About/>
      </div>

      {/* Scholarship Info Section */}
      <div id="ScholarshipInfo-section">
        <ScholarshipInfo />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Scholarship Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
