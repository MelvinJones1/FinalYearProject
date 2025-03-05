import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "",
    email: "",
    password: "",
    linkedIn: "",
    proof: "",
    role: "student",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      proof: name === "role" && value === "student" ? "" : prev.proof, // Reset proof if student
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      alert(data.message);

      // Redirecting based on role
      navigate(
        formData.role === "student" ? "/studentLanding" : "/pendingApproval",
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="text"
            name="linkedIn"
            placeholder="LinkedIn (Optional)"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* Show proof input only for Alumni */}
          {formData.role === "alumni" && (
            <input
              type="text"
              name="proof"
              placeholder="Proof eg : Clg Roll No "
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          )}

          <select
            name="role"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </select>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition cursor-pointer"
          >
            Register
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-gray-300 text-gray-800 p-3 rounded-lg font-semibold hover:bg-gray-400 transition cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Register;
