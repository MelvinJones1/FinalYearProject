import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AlumniLandingPage = () => {
  const navigate = useNavigate();
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

      {/* Welcome Section */}
      <section className="text-center py-12 bg-white shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Welcome, Alumni!</h2>
        <p className="text-lg text-gray-600 mt-2">
          Connect with students, post jobs, and contribute to the community.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link
            to="/post-job"
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group p-6 text-center"
          >
            <div className="text-5xl text-blue-600 group-hover:text-blue-800 mb-4">
              💼
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              Post a Job
            </h3>
            <p className="text-gray-600 mt-2">
              Share job opportunities with students.
            </p>
          </Link>

          <Link
            to="/donation"
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group p-6 text-center"
          >
            <div className="text-5xl text-blue-600 group-hover:text-blue-800 mb-4">
              💰
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              Donation Portal
            </h3>
            <p className="text-gray-600 mt-2">
              Contribute to student scholarships.
            </p>
          </Link>

          <Link
            to="/directory"
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group p-6 text-center"
          >
            <div className="text-5xl text-blue-600 group-hover:text-blue-800 mb-4">
              📖
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              Alumni Directory
            </h3>
            <p className="text-gray-600 mt-2">
              Find and connect with fellow alumni.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlumniLandingPage;
