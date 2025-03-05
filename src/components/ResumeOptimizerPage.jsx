import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResumeOptimizer = () => {
  const [file, setFile] = useState(null);
  const [suggestions, setSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Upload the resume to the backend
      const formData = new FormData();
      formData.append("resume", file);

      const response = await axios.post(
        "http://localhost:5000/api/ai/analyze-resume", // ✅ Correct new route
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      // Step 2: Display suggestions
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      setError("Failed to analyze resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="py-4 px-6">
        <button
          onClick={() => navigate("/studentLanding")}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Go Back
        </button>
      </section>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Resume Optimizer
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Upload Your Resume (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Analyzing..." : "Optimize Resume"}
            </button>
          </form>

          {error && (
            <div className="mt-4 text-red-600">
              <p>{error}</p>
            </div>
          )}

          {suggestions && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Suggestions
              </h2>
              <div
                className="mt-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: suggestions }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResumeOptimizer;
