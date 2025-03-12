import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AtSign, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 Hook for navigation
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in", { email, password });

    // Simulate login validation (replace with actual authentication logic)
    if (email && password) {
      navigate("/dashboard"); // 👈 Redirect to dashboard on successful login
    } else {
      alert("Please enter valid credentials!");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="relative w-full max-w-md p-10 overflow-hidden bg-white rounded-2xl shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-300 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full translate-x-10 translate-y-10 opacity-20"></div>
        
        {/* Login header */}
        <div className="relative mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Welcome Back</h2>
          <p className="mt-2 text-gray-500">Sign in to your account to continue</p>
        </div>
        
        {/* Login form */}
        <form onSubmit={handleLogin} className="relative z-10 space-y-6">
          <div className="group">
            <div className="flex items-center border-b-2 border-gray-300 group-focus-within:border-indigo-600 transition-colors pb-2">
              <AtSign className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                required
              />
            </div>
          </div>
          
          <div className="group">
            <div className="flex items-center border-b-2 border-gray-300 group-focus-within:border-indigo-600 transition-colors pb-2">
              <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                required
              />
            </div>
            <div className="flex justify-end mt-2">
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800">
                Forgot password?
              </Link>
            </div>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center w-full px-6 py-3 text-white transition-all bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-1"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </form>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <Link to="/signup" className="ml-1 font-medium text-indigo-600 hover:text-indigo-800 hover:underline">
              Sign up
            </Link>
          </p>
          
          {/* Social login options could be added here */}
          <div className="flex justify-center gap-6 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <span className="text-lg font-bold text-blue-600">f</span>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <span className="text-lg font-bold text-blue-400">t</span>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <span className="text-lg font-bold text-red-500">g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
