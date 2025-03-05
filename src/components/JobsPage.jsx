import React from "react";
import { Link, useNavigate } from "react-router-dom";

const JobsPage = () => {
  const navigate = useNavigate();

  // Expanded dummy job data
  const jobs = [
    {
      title: "Software Engineer",
      company: "TechCorp",
      description:
        "Join a leading tech company focused on innovative solutions in software development.",
      location: "Remote",
    },
    {
      title: "Data Analyst",
      company: "DataSolutions Inc.",
      description:
        "Help companies make data-driven decisions by analyzing large datasets.",
      location: "New York, NY",
    },
    {
      title: "Product Manager",
      company: "InnovateX",
      description:
        "Lead product development from concept to launch while collaborating with cross-functional teams.",
      location: "San Francisco, CA",
    },
    {
      title: "UX Designer",
      company: "DesignWorks",
      description:
        "Create user-centered designs for web and mobile platforms with a focus on user experience.",
      location: "Austin, TX",
    },
    {
      title: "Cybersecurity Specialist",
      company: "SecureTech",
      description:
        "Ensure the safety and security of company networks and systems from cyber threats.",
      location: "Boston, MA",
    },
    {
      title: "DevOps Engineer",
      company: "CloudOps",
      description:
        "Streamline deployment pipelines and infrastructure management in cloud environments.",
      location: "Seattle, WA",
    },
    {
      title: "Frontend Developer",
      company: "PixelPerfect",
      description:
        "Build visually stunning and responsive websites using modern frontend technologies.",
      location: "Remote",
    },
    {
      title: "AI Research Scientist",
      company: "DeepVision AI",
      description:
        "Conduct groundbreaking research in artificial intelligence and machine learning.",
      location: "Los Angeles, CA",
    },

    {
      title: "Blockchain Developer",
      company: "CryptoChain",
      description:
        "Develop decentralized applications and smart contracts on blockchain platforms.",
      location: "Remote",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Job Opportunities</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/logout" className="hover:underline">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Go Back Button */}
      <section className="py-4 px-6">
        <button
          onClick={() => navigate("/studentLanding")}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Go Back
        </button>
      </section>

      {/* Jobs List */}
      <section className="py-3 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Available Jobs
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 mt-2">{job.description}</p>
              <p className="text-gray-400 mt-2">{job.location}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => window.open("https://www.naukri.com/", "_blank")}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
