import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentLandingPage from "./pages/StudentLandingPage";
import EventsPage from "./components/EventsPage";
// import MentorshipPage from "./components/MentorshipPage";
import ResumeOptimizerPage from "./components/ResumeOptimizerPage";
import AlumniLandingPage from "./pages/AlumniLandingPage";
import PostJob from "./components/PostJob";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./pages/AdminDashboard"; // Import AdminDashboard
// import PendingApproval from "./components/PendingApproval"; // Import PendingApproval
import DonationPage from "./components/DonationPage";
import AlumniDirectory from "./components/AlumniDirectory";
import JobsPage from "./components/JobsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentLanding" element={<StudentLandingPage />} />
        <Route path="/alumniLanding" element={<AlumniLandingPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="/mentorship" element={<MentorshipPage />} /> */}
        <Route path="/resume" element={<ResumeOptimizerPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />{" "}
        {/* <Route path="/pendingApproval" element={<PendingApproval />} /> */}
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/directory" element={<AlumniDirectory />} />
        {/* Add Admin Route */}
      </Routes>
    </Router>
  );
}

export default App;
