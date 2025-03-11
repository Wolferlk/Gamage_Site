import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import JobCard from '../components/JobCard';

// Mock data - will be replaced with actual API calls
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    location: "Colombo",
    jobType: "Full-time",
    salaryRange: "$3000-$5000",
    description: "Looking for an experienced software engineer to lead our development team.",
    qualifications: ["5+ years experience", "Bachelor's degree", "Strong leadership skills"],
    postedDate: "2023-09-15"
  },
  {
    id: 2,
    title: "HR Manager",
    company: "Global Enterprises",
    location: "Kandy",
    jobType: "Full-time",
    salaryRange: "$2500-$3500",
    description: "Seeking an experienced HR professional to manage our growing team.",
    qualifications: ["4+ years HR experience", "Master's degree preferred"],
    postedDate: "2023-09-14"
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Digital Marketing Pro",
    location: "Galle",
    jobType: "Remote",
    salaryRange: "$2000-$3000",
    description: "Join our dynamic marketing team and help grow our digital presence.",
    qualifications: ["3+ years marketing experience", "Digital marketing certification"],
    postedDate: "2023-09-13"
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Colombo",
    jobType: "Contract",
    salaryRange: "$2500-$4000",
    description: "Frontend developer needed for exciting web projects.",
    qualifications: ["React expertise", "3+ years experience"],
    postedDate: "2023-09-12"
  },
  {
    id: 5,
    title: "Business Analyst",
    company: "Finance Corp",
    location: "Colombo",
    jobType: "Full-time",
    salaryRange: "$2800-$3800",
    description: "Business analyst needed for our expanding finance team.",
    qualifications: ["Finance background", "Strong analytical skills"],
    postedDate: "2023-09-11"
  }
];

const locations = ["All Locations", "Colombo", "Kandy", "Galle", "Remote"];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Remote"];
const salaryRanges = [
  "All Ranges",
  "Below $2000",
  "$2000-$3000",
  "$3000-$4000",
  "$4000+"
];

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedJobType, setSelectedJobType] = useState('All Types');
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('All Ranges');
  const [showFilters, setShowFilters] = useState(false);

  // Filter jobs based on search and filter criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesJobType = selectedJobType === 'All Types' || job.jobType === selectedJobType;
    const matchesSalary = selectedSalaryRange === 'All Ranges' || true; // Implement proper salary range filtering

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Available Positions
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            Find your next career opportunity with leading companies in Sri Lanka
          </p>
        </div>
      </div>

      {/* Search and filters */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border-0 py-2 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <button
            className="flex items-center gap-2 text-sm font-medium text-gray-700 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FunnelIcon className="h-5 w-5" />
            Filters
          </button>

          <div className={`flex flex-col md:flex-row gap-4 w-full md:w-auto ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black"
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={selectedSalaryRange}
              onChange={(e) => setSelectedSalaryRange(e.target.value)}
              className="rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-black"
            >
              {salaryRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-8 mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredJobs.length} jobs
          </p>
        </div>

        {/* Job listings */}
        <div className="grid gap-6">
          {filteredJobs.map(job => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}