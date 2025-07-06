import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        {/* Left Info Panel */}
        <div className="bg-teal-700 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
            <p className="text-teal-100 mb-6 text-sm leading-relaxed">
              We’d love to hear from you. Reach out for any questions or suggestions.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-base" />
                <span>123 Knowledge St, EduLand</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-base" />
                <span>+252 61 2345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-base" />
                <span>info@scholarshipschool.com</span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-teal-200">&copy; 2025 Scholarship School</p>
        </div>

        {/* Right Contact Form */}
        <form className="p-8 space-y-5 bg-white">
          <h3 className="text-xl font-semibold text-teal-800 mb-2">Send a Message</h3>
          <div>
            <label className="block text-gray-700 text-sm">Full Name</label>
            <input
              type="text"
              // placeholder="John Doe"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-400 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Message</label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-medium py-2 rounded-md hover:bg-teal-700 text-sm transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
