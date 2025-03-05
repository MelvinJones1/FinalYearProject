import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniDirectory = () => {
  const navigate = useNavigate();

  // Hardcoded alumni data
  const alumniList = [
    {
      name: "John Doe",
      branch: "Computer Science",
      year: "2020",
      company: "TechCorp",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      name: "Jane Smith",
      branch: "Electrical Engineering",
      year: "2019",
      company: "ElectroSystems",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      name: "Emily Johnson",
      branch: "Mechanical Engineering",
      year: "2021",
      company: "MechWorks",
      linkedin: "https://www.linkedin.com/in/emilyjohnson",
    },
    {
      name: "Michael Brown",
      branch: "Computer Science",
      year: "2018",
      company: "CodeLabs",
      linkedin: "https://www.linkedin.com/in/michaelbrown",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniList);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    // Filter alumni based on search query (name, branch, or year)
    const filtered = alumniList.filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(query) ||
        alumni.branch.toLowerCase().includes(query) ||
        alumni.year.includes(query),
    );
    setFilteredAlumni(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alumni Directory</h1>
        </div>
      </header>

      {/* Go Back Button */}
      <section className="py-4 px-6">
        <button
          onClick={() => navigate("/alumniLanding")}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Go Back
        </button>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-xl mx-auto text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by Name, Branch, or Year"
            className="w-full p-4 text-lg border border-gray-300 rounded-md"
          />
        </div>
      </section>

      {/* Alumni List Section */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          {filteredAlumni.length > 0 ? (
            <div className="space-y-6">
              {filteredAlumni.map((alumni, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {alumni.name}
                  </h3>
                  <p className="text-gray-600">Branch: {alumni.branch}</p>
                  <p className="text-gray-600">Year: {alumni.year}</p>
                  <p className="text-gray-600">Company: {alumni.company}</p>
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No alumni found matching your search.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AlumniDirectory;
