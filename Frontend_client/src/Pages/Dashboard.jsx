import { useState, useEffect } from "react";
import { 
  User, Briefcase, Edit3, Settings,
  ChevronRight, Shield, Award, Bell, 
  Calendar, MapPin, Phone, Mail, Link, 
  Linkedin, Facebook, FileText, Eye
} from "lucide-react";

// Import the components
import ProfileOverview from "../components/dashboard/ProfileOverview";
import AppliedJobs from "../components/dashboard/AppliedJobs";
import EditProfileForm from "../components/dashboard/EditProfileForm";
import AccountSettings from "../components/dashboard/AccountSettings";

// Animated Tab Context
const TabContext = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [previousTab, setPreviousTab] = useState(null);
  const [direction, setDirection] = useState(null);
  
  const changeTab = (newTab) => {
    const tabOrder = ["overview", "jobs", "edit", "settings"];
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    
    setPreviousTab(activeTab);
    setDirection(newIndex > currentIndex ? "right" : "left");
    setActiveTab(newTab);
  };
  
  const tabs = {
    activeTab,
    previousTab,
    direction,
    setActiveTab: changeTab,
  };
  
  return children(tabs);
};

// Activity Badge Component
const ActivityBadge = ({ count }) => (
  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
    {count}
  </div>
);

// Status Indicator Component
const StatusIndicator = ({ status }) => {
  const getStatusStyle = () => {
    switch(status) {
      case "Active":
        return "bg-green-500";
      case "Away":
        return "bg-yellow-500";
      case "Busy":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${getStatusStyle()}`}></div>
      <span className="text-sm text-gray-600">{status}</span>
    </div>
  );
};

// Animated Card Component
const AnimatedCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transform transition-all duration-500 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

// Main Dashboard Component
export default function Dashboard() {
  const [userStatus, setUserStatus] = useState("Active");
  const [notifications, setNotifications] = useState(3);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
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
    password: "********",
    profileCompletion: 85,
    memberSince: "January 2023",
    lastActive: "Today at 10:30 AM"
  });
  
  // Enhanced applied jobs data
  const [appliedJobs, setAppliedJobs] = useState([
    {
      id: "j001",
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      companyLogo: "/api/placeholder/48/48",
      location: "Colombo",
      salary: "$80,000 - $95,000",
      type: "Full-time",
      appliedDate: "2025-02-28",
      status: "Interview Scheduled",
      statusColor: "bg-green-100 text-green-800",
      interviewDate: "2025-03-15",
      description: "Leading frontend development for enterprise applications...",
      nextSteps: "Prepare for technical interview scheduled on March 15th",
      viewCount: 5
    },
    {
      id: "j002",
      title: "Full Stack Engineer",
      company: "DataSys International",
      companyLogo: "/api/placeholder/48/48",
      location: "Remote",
      salary: "$75,000 - $90,000",
      type: "Contract",
      appliedDate: "2025-02-15",
      status: "Application Viewed",
      statusColor: "bg-blue-100 text-blue-800",
      viewCount: 3
    },
    {
      id: "j003",
      title: "UX/UI Designer",
      company: "Creative Minds",
      companyLogo: "/api/placeholder/48/48",
      location: "Kandy",
      salary: "$65,000 - $80,000",
      type: "Part-time",
      appliedDate: "2025-01-30",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      feedback: "Selected a candidate with more industry-specific experience",
      viewCount: 1
    }
  ]);
  
  // Job recommendations
  const [jobRecommendations, setJobRecommendations] = useState([
    {
      id: "rec001",
      title: "React Developer",
      company: "InnoTech Solutions",
      matchPercentage: 92
    },
    {
      id: "rec002",
      title: "Frontend Team Lead",
      company: "Global Systems Inc.",
      matchPercentage: 87
    }
  ]);
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [showTerminate, setShowTerminate] = useState(false);
  const [formData, setFormData] = useState({...user});
  
  // Simulate first visit welcome
  useEffect(() => {
    if (isFirstVisit) {
      setTimeout(() => {
        setIsFirstVisit(false);
      }, 3000);
    }
  }, [isFirstVisit]);
  
  // Handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`
    });
    
    // Show success toast notification
    const toast = document.createElement("div");
    toast.className = "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-500 ease-out";
    toast.textContent = "Profile updated successfully!";
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add("translate-y-20", "opacity-0");
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 500);
    }, 3000);
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    // Implement password change logic
    alert("Password changed successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };
  
  const handleTerminateAccount = () => {
    // Implement account termination logic
    if (window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone.")) {
      alert("Account terminated successfully.");
      // Redirect to home page or login
    }
  };
  
  const dismissWelcome = () => {
    setIsFirstVisit(false);
  };
  
  // Enhanced Components rendering with animations
  const renderTabContent = (tab, direction, previousTab) => {
    const slideDirection = direction === "right" ? "-translate-x-full" : "translate-x-full";
    const enterDirection = direction === "right" ? "translate-x-full" : "-translate-x-full";
    
    const getContent = (tabName) => {
      switch(tabName) {
        case "overview": 
          return <ProfileOverview 
                   user={user} 
                   jobRecommendations={jobRecommendations}
                   userStatus={userStatus}
                   setUserStatus={setUserStatus}
                 />;
        case "jobs": 
          return <AppliedJobs 
                   appliedJobs={appliedJobs}
                   setAppliedJobs={setAppliedJobs}
                 />;
        case "edit": 
          return <EditProfileForm 
                   formData={formData} 
                   handleFormChange={handleFormChange} 
                   handleFormSubmit={handleFormSubmit} 
                   user={user}
                 />;
        case "settings": 
          return <AccountSettings 
                   passwordData={passwordData}
                   handlePasswordChange={handlePasswordChange}
                   handlePasswordSubmit={handlePasswordSubmit}
                   showTerminate={showTerminate}
                   setShowTerminate={setShowTerminate}
                   handleTerminateAccount={handleTerminateAccount}
                   user={user}
                 />;
        default: return null;
      }
    };
    
    return (
      <div className="relative overflow-hidden">
        <div 
          className={`transform transition-all duration-500 ease-in-out ${
            tab === previousTab ? slideDirection : "translate-x-0"
          }`}
        >
          {getContent(tab)}
        </div>
        
        {previousTab && (
          <div 
            className={`absolute top-0 left-0 right-0 transform transition-all duration-500 ease-in-out ${
              tab === previousTab ? "translate-x-0" : enterDirection
            }`}
          >
            {getContent(previousTab)}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen p-4 md:p-6 transition-all duration-300">
     
      {isFirstVisit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md shadow-2xl transform transition-all duration-500 scale-up">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-indigo-700">Welcome back!</h2>
              <button onClick={dismissWelcome} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6">We're excited to see you again. Your dashboard has been updated with new features!</p>
            <div className="flex space-x-4 mb-4">
              <div className="text-center p-3 bg-indigo-50 rounded-lg">
                <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-sm font-medium">Profile 85% complete</span>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-sm font-medium">3 Active applications</span>
              </div>
            </div>
            <button 
              onClick={dismissWelcome}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition duration-200"
            >
              Let's go!
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto">
        <AnimatedCard>
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-8 rounded-2xl mb-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-12 -mr-12"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -mb-10 -ml-10"></div>
            
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">Welcome back, {user.firstName}!</h1>
                <div className="mt-2 flex items-center">
                  <StatusIndicator status={userStatus} />
                  <span className="mx-2">•</span>
                  <span className="text-sm">Last active: {user.lastActive}</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={user.photo} 
                  alt={user.fullName} 
                  className="w-16 h-16 rounded-full border-4 border-white border-opacity-20"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-2 border-white"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center text-sm opacity-90 gap-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" /> Member since {user.memberSince}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" /> {user.address}
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-1" /> {user.email}
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <TabContext defaultTab="overview">
                  {({ activeTab, setActiveTab, previousTab, direction }) => (
                    <>
                      <div className="flex border-b">
                        <button 
                          onClick={() => setActiveTab("overview")}
                          className={`flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium relative ${
                            activeTab === "overview" 
                              ? "text-indigo-700 font-semibold" 
                              : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          <User size={18} />
                          <span>Profile</span>
                          {activeTab === "overview" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                          )}
                        </button>
                        <button 
                          onClick={() => setActiveTab("jobs")}
                          className={`flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium relative ${
                            activeTab === "jobs" 
                              ? "text-indigo-700 font-semibold" 
                              : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          <Briefcase size={18} />
                          <span>Applied Jobs</span>
                          <ActivityBadge count={3} />
                          {activeTab === "jobs" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                          )}
                        </button>
                        <button 
                          onClick={() => setActiveTab("edit")}
                          className={`flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium relative ${
                            activeTab === "edit" 
                              ? "text-indigo-700 font-semibold" 
                              : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          <Edit3 size={18} />
                          <span>Edit Profile</span>
                          {activeTab === "edit" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                          )}
                        </button>
                        <button 
                          onClick={() => setActiveTab("settings")}
                          className={`flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium relative ${
                            activeTab === "settings" 
                              ? "text-indigo-700 font-semibold" 
                              : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          <Settings size={18} />
                          <span>Account Settings</span>
                          {activeTab === "settings" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                          )}
                        </button>
                      </div>
                      
                      <div className="p-6">
                        {renderTabContent(activeTab, direction, previousTab)}
                      </div>
                    </>
                  )}
                </TabContext>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="font-medium text-gray-800 mb-4">Quick Stats</h3>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Profile Completion</span>
                      <span className="text-sm font-medium">{user.profileCompletion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${user.profileCompletion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Applications</span>
                      <span className="text-sm font-medium">{appliedJobs.length}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Eye size={14} className="mr-1" /> 
                      <span>{appliedJobs.reduce((total, job) => total + (job.viewCount || 0), 0)} profile views</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Interview Rate</span>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">1 of 3 applications</div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-3">Job Matches</h4>
                    {jobRecommendations.map(job => (
                      <div 
                        key={job.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer mb-2 border border-gray-100"
                      >
                        <div className="min-w-8 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          {job.matchPercentage}%
                        </div>
                        <div className="overflow-hidden">
                          <div className="font-medium text-sm truncate">{job.title}</div>
                          <div className="text-xs text-gray-500 truncate">{job.company}</div>
                        </div>
                        <ChevronRight size={16} className="ml-auto text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={200}>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="font-medium text-gray-800 mb-4">Activity Timeline</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Briefcase size={18} />
                  </div>
                  <div className="flex-grow h-full border-l border-gray-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">Applied for Senior Frontend Developer</h4>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">You applied for a new position at TechCorp Solutions.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Eye size={18} />
                  </div>
                  <div className="flex-grow h-full border-l border-gray-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">Profile Viewed by DataSys International</h4>
                    <span className="text-sm text-gray-500">5 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Your profile was viewed by a recruiter from DataSys International.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Edit3 size={18} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">Updated Your Profile</h4>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">You updated your profile information and uploaded a new CV.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={300}>
          <div className="bg-gray-800 text-gray-300 rounded-xl p-4 text-center text-sm shadow-md">
            <p>© 2025 Job Portal. All rights reserved. <a href="#" className="text-indigo-300 hover:text-white">Privacy Policy</a> | <a href="#" className="text-indigo-300 hover:text-white">Terms of Service</a></p>
          </div>
        </AnimatedCard>
      </div>
      
      {/* Fixed Position Notification Bell */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 relative">
          <Bell size={20} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .scale-up {
          animation: scaleUp 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}