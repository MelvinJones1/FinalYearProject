import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [pendingAlumni, setPendingAlumni] = useState([]);

  useEffect(() => {
    fetchPendingAlumni();
  }, []);

  const fetchPendingAlumni = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from storage
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/auth/admin/pending-alumni",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setPendingAlumni(response.data); // ✅ Ensure state is updated
      console.log("Pending Alumni:", response.data);
    } catch (error) {
      console.error(
        "Error fetching pending alumni:",
        error.response?.data || error.message,
      );
    }
  };

  const approveAlumni = async (id) => {
    try {
      const token = localStorage.getItem("token"); // ✅ Ensure token is sent
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      await axios.put(
        `http://localhost:5000/api/auth/admin/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      setPendingAlumni(pendingAlumni.filter((alumni) => alumni._id !== id)); // ✅ Remove approved alumni from the list
      alert("Alumni approved!");
    } catch (error) {
      console.error(
        "Error approving alumni:",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Alumni Approvals</h1>
      {pendingAlumni.length === 0 ? (
        <p>No pending alumni</p>
      ) : (
        <ul>
          {pendingAlumni.map((alumni) => (
            <li
              key={alumni._id}
              className="flex justify-between items-center mb-2 p-4 border"
            >
              <span>
                {alumni.name} - {alumni.email}
              </span>
              <button
                onClick={() => approveAlumni(alumni._id)}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
