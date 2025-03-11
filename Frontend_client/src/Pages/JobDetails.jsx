import { useParams } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    location: "Colombo",
    jobType: "Full-time",
    salaryRange: "$3000-$5000",
    description:
      "Looking for an experienced software engineer to lead our development team.",
    responsibilities: [
      "Develop and maintain software applications",
      "Lead a team of junior developers",
      "Ensure best coding practices are followed",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in React, Node.js, and TypeScript",
      "Strong problem-solving skills",
    ],
  },
  // Add more job listings as needed
];

export default function JobDetails() {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return <div className="text-center text-red-500">Job not found</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{job.company} - {job.location}</p>
      <span className="mt-4 inline-block bg-green-100 text-green-700 px-3 py-1 text-sm rounded">
        {job.jobType}
      </span>
      <p className="mt-4 text-gray-700">{job.description}</p>

      <h2 className="mt-8 text-2xl font-semibold">Responsibilities</h2>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {job.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Requirements</h2>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <div className="mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
          Apply Now
        </button>
      </div>
    </div>
  );
}
