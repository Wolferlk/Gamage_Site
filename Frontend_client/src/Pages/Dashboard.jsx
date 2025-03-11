import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState({
    userId: "001",
    fullName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    birthDate: "1995-06-15",
    age: 29,
    address: "123 Main Street, Colombo",
    address2: "Apartment 4B",
    phoneNumber1: "0771234567",
    phoneNumber2: "0112233445",
    portfolioLink: "https://johndoe.dev",
    linkedInLink: "https://linkedin.com/in/johndoe",
    facebookLink: "https://facebook.com/johndoe",
    profileDescription: "Experienced Software Engineer with expertise in full-stack development.",
    cv: "johndoe_cv.pdf",
    photo: "https://via.placeholder.com/150",
    email: "johndoe@example.com",
    password: "********"
  });

  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit user details");
  };

  const handleHideAccount = () => {
    // Implement hide account functionality
    console.log("Account hidden");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center space-x-6">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.fullName}</h2>
            <p className="text-gray-600">{user.profileDescription}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
          <div className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phoneNumber1}</p>
            <p><strong>Secondary Phone:</strong> {user.phoneNumber2}</p>
            <p><strong>Address:</strong> {user.address}, {user.address2}</p>
            <p><strong>Birth Date:</strong> {user.birthDate} ({user.age} years old)</p>
            <p><strong>Gender:</strong> {user.gender}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Social & Portfolio</h3>
          <div className="mt-2 space-y-2 text-blue-600">
            <a href={user.portfolioLink} target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a href={user.linkedInLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={user.facebookLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
          <button
            onClick={handleHideAccount}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Hide Account
          </button>
        </div>
      </div>
    </div>
  );
}
