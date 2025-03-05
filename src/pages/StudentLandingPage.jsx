import React from "react";
import { Link } from "react-router-dom";

const StudentLandingPage = () => {
  
  const features = [
    {
      title: "Jobs",
      description: "Find job opportunities shared by alumni.",
      link: "/jobs",
      icon: "💼",
    },
    {
      title: "Events",
      description: "Discover and join career-related events.",
      link: "/events",
      icon: "📅",
    },
    {
      title: "Mentorship",
      description: "Connect with alumni mentors for guidance.",
      link: "/mentorship",
      icon: "🤝",
    },
    {
      title: "Resume Optimizer",
      description: "Optimize your resume to stand out.",
      link: "/resume",
      icon: "📄",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alumni Association</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="text-center py-12 bg-white shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Welcome, Student!</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore all the features available to you. Start your journey now!
        </p>
      </section>

      {/* Feature Cards */}
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              to={feature.link} // Link to the Jobs page or other pages
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group p-6"
            >
              <div className="text-5xl text-blue-600 group-hover:text-blue-800 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentLandingPage;
