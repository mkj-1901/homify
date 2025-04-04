import React from "react";
import Sidebar from "./components/Sidebar";
import DeviceCard from "./components/DeviceCard";
import { Lightbulb, Fan, Thermometer } from "lucide-react";

const devices = [
  { name: "Living Room Light", icon: Lightbulb, isOn: true },
  { name: "Bedroom Fan", icon: Fan, isOn: false },
  { name: "AC Unit", icon: Thermometer, isOn: true },
];

const details = [
  { name: "Lights are turned on", icon: Lightbulb, isOn: true },
  { name: "Temperature is 28 C", icon: Fan, isOn: false },
];

const App = () => {
  return (
    <div className="flex bg-[#c3e8d6]" >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center min-h-screen mt-16 p-6">
        <h1 className="text-4xl font-bold ml-2 w-full">Homify</h1>
        <p className="text-gray-600 mb-6 mt-3 ml-2 w-full">Guten Morgen, Dr. Ranjana Vyas !</p>

        {/* Device Cards - Responsive Grid */}
        <p className="text-gray-800 font-medium text-xl mb-4 mt-3 ml-2 w-full">Control Devices</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>

        {/* Details Cards - Responsive Grid */}
        <p className="text-gray-800 font-medium text-xl mb-4 mt-8 ml-2 w-full">Device Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {details.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
