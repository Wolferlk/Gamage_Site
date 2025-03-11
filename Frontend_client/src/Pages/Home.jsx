import { Link } from 'react-router-dom';

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    location: "Colombo",
    jobType: "Full-time",
    salaryRange: "$3000-$5000",
    description: "Looking for an experienced software engineer to lead our development team."
  },
  {
    id: 2,
    title: "HR Manager",
    company: "Global Enterprises",
    location: "Kandy",
    jobType: "Full-time",
    salaryRange: "$2500-$3500",
    description: "Seeking an experienced HR professional to manage our growing team."
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Digital Marketing Pro",
    location: "Galle",
    jobType: "Remote",
    salaryRange: "$2000-$3000",
    description: "Join our dynamic marketing team and help grow our digital presence."
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.1]"
          autoPlay
          loop
          muted
          playsInline
          src="https://videos.pexels.com/video-files/7989708/7989708-hd_1920_1080_25fps.mp4"
        />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8 text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find Your Dream Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Connect with top employers and opportunities across Sri Lanka. Let us help you take the next step in your career journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/jobs" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100">
                Browse Jobs
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Jobs</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover opportunities that match your skills and aspirations
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`} className="hover:shadow-lg transition-shadow">
              <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <p className="mt-4 text-sm text-gray-600">{job.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-sm text-gray-500">{job.salaryRange}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of professionals who've found their perfect career match through Gamage Recruiters
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/login" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Get Started
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
