import React from "react";
import Sidebar from "./components/Sidebar";
import DeviceCard from "./components/DeviceCard";
import { Lightbulb, Fan, Thermometer } from "lucide-react";

const devices = [
  { name: "Living Room Light", icon: Lightbulb, isOn: true },
  { name: "Bedroom Fan", icon: Fan, isOn: false },
  { name: "AC Unit", icon: Thermometer, isOn: true },
];

const App = () => {
  return (
    <div className="flex bg-[#FFF0DC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-2xl font-bold text-center">Homify</h1>
        <p className="text-gray-600 mb-6 text-center">Control your devices efficiently.</p>

        {/* Device Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
