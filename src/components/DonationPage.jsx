import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Handle the donation logic (e.g., send data to the backend or process payment)
    console.log(`Donation Amount: $${amount}`);
    alert(`Thank you for your donation of $${amount}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alumni Donation Portal</h1>
        </div>
      </header>

      {/* Go Back Button */}
      <section className="py-4 px-6">
        <button
          onClick={() => navigate(-1)} // Navigates to the previous page
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Go Back
        </button>
      </section>

      {/* Donation Section */}
      <section className="text-center py-12 bg-white shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Make a Donation</h2>
        <p className="text-lg text-gray-600 mt-2">
          Your generous contribution helps support student scholarships and
          initiatives.
        </p>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleDonationSubmit}>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Donation Amount ($)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter amount"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
