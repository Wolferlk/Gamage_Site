import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add backend integration for form submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-700 block mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Details & Google Map */}
        <div className="w-full md:w-1/2 p-8 bg-blue-600 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-lg" />
              <p>123 Main Street, Colombo, Sri Lanka</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="mr-2 text-lg" />
              <p>+94 76 123 4567</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-lg" />
              <p>contact@example.com</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              className="w-full h-48 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5834686196353!2d79.86124321531878!3d6.927079795017655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594271b6a89f%3A0x8c24d3d3685eddae!2sColombo!5e0!3m2!1sen!2slk!4v1644386366921!5m2!1sen!2slk"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
