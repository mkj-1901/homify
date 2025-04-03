import React from "react";
import Sidebar from "./Sidebar";
import DeviceGrid from "./DeviceGrid";
import "tailwindcss"

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Homify</h1>
        <DeviceGrid />
      </div>
    </div>
  );
};

export default Dashboard;
