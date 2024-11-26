import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable Card Component
const ActionCard = ({ label, onClick }) => (
  <div
  className="flex flex-col items-center justify-center h-64 p-6 transition-all duration-300 transform bg-gray-800 shadow-2xl cursor-pointer w-full sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] rounded-xl hover:bg-gray-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 active:scale-110"
    aria-label={`${label} card`}
    onClick={onClick}
  >
    <h3 className="text-3xl font-bold text-center text-white">{label}</h3>
  </div>
);

function HomePage({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full pt-10">
      <div className="grid w-full max-w-5xl grid-cols-2 gap-6 px-1 sm:grid-cols-4 lg:grid-cols-4 lg:gap-4">
      {/* Attendance Card */}
        <ActionCard label="Mark Attendance" onClick={toggleSidebar} />

        {/* View Attendance Card */}
        <ActionCard
          label="View Attendance"
          onClick={() => navigate("/viewattendance")}
        />

        {/* Dashboard Card */}
        <ActionCard
          label="Dashboard"
          onClick={() => navigate("/dashboard")}
        />

        {/* Sign-in Card */}
        <ActionCard
          label="Signin"
          onClick={() => navigate("/signin")}
        />
      </div>
    </div>
  );
}

export default HomePage;
