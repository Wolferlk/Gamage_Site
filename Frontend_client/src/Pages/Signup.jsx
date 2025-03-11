import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaPhone, 
  FaBirthdayCake, 
  FaLinkedin, 
  FaFacebook, 
  FaLink, 
  FaPortrait,
  FaMapMarkerAlt
} from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    birthDate: '',
    address: '',
    address2: '',
    phoneNumber1: '',
    phoneNumber2: '',
    portfolioLink: '',
    linkedInLink: '',
    facebookLink: '',
    profileDescription: '',
    cv: null,
    photo: null,
    visibility: 'public'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up", formData);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Decorative Panel */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pattern-cross pattern-gray-200 pattern-size-4" />
          <div className="relative p-12 h-full flex flex-col justify-between text-white">
            <Link to="/" className="text-2xl font-bold">Gamage Recruiters</Link>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">Join Our Talent Network</h1>
              <p className="text-lg opacity-90">
                Connect with top employers and showcase your professional profile to 
                unlock amazing career opportunities.
              </p>
            </div>
            <div className="animate-float">
              <svg viewBox="0 0 500 500" className="w-64 h-64 opacity-20">
                <path 
                  fill="currentColor" 
                  d="M250,100 C350,50 450,150 250,300 C50,150 150,50 250,100 Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="w-full lg:w-1/2 p-12">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Create Your Professional Profile
              </h2>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaUser className="mr-2 text-blue-500" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      className="w-full border rounded-lg p-3 shadow-sm"
                      required
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaBirthdayCake className="text-gray-400 mr-2" />
                      <input
                        type="date"
                        name="birthDate"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Address *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <input
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Address
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <input
                        type="text"
                        name="address2"
                        placeholder="Apartment, Suite, etc."
                        className="w-full outline-none"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Phone *
                      </label>
                      <div className="flex items-center border rounded-lg p-3 shadow-sm">
                        <FaPhone className="text-gray-400 mr-2" />
                        <input
                          type="tel"
                          name="phoneNumber1"
                          placeholder="+94 77 123 4567"
                          className="w-full outline-none"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secondary Phone
                      </label>
                      <div className="flex items-center border rounded-lg p-3 shadow-sm">
                        <FaPhone className="text-gray-400 mr-2" />
                        <input
                          type="tel"
                          name="phoneNumber2"
                          placeholder="+94 76 765 4321"
                          className="w-full outline-none"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Professional Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaLink className="mr-2 text-blue-500" />
                  Social & Professional Links
                </h3>

                <div className="space-y-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaLinkedin className="text-gray-400 mr-2" />
                      <input
                        type="url"
                        name="linkedInLink"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full outline-none"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook Profile
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaFacebook className="text-gray-400 mr-2" />
                      <input
                        type="url"
                        name="facebookLink"
                        placeholder="https://facebook.com/yourprofile"
                        className="w-full outline-none"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio Website
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaPortrait className="text-gray-400 mr-2" />
                      <input
                        type="url"
                        name="portfolioLink"
                        placeholder="https://yourportfolio.com"
                        className="w-full outline-none"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Security Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaLock className="mr-2 text-blue-500" />
                  Account Security
                </h3>

                <div className="space-y-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaEnvelope className="text-gray-400 mr-2" />
                      <input
                        type="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <FaLock className="text-gray-400 mr-2" />
                      <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className="w-full outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Visibility *
                    </label>
                    <div className="flex items-center border rounded-lg p-3 shadow-sm">
                      <MdOutlineVisibility className="text-gray-400 mr-2" />
                      <select
                        name="visibility"
                        className="w-full outline-none bg-transparent"
                        required
                        onChange={handleInputChange}
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Uploads Section */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FaPortrait className="mr-2 text-blue-500" />
                  Documents & Media
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV (PDF) *
                    </label>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf"
                      className="w-full"
                      required
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      className="w-full"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Description */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Description *
                  </label>
                  <textarea
                    name="profileDescription"
                    placeholder="Describe your professional background and skills..."
                    className="w-full border rounded-lg p-3 shadow-sm h-32"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Submit Section */}
              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl 
                            hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Complete Registration
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}