import React from "react";
import Sidebar from "./components/Sidebar";
import DeviceCard from "./components/DeviceCard";
import { Lightbulb, Fan, Thermometer, AirVent, Sun} from "lucide-react";
import { useState } from "react";

const devices = [
  { name: "Living Room Light", icon: Lightbulb, isOn: true },
  { name: "Bedroom Fan", icon: Fan, isOn: false },
  { name: "AC Unit", icon: AirVent, isOn: true },
];
const details = [
  { name: "Light Intensity", icon: Sun, value: null },
  { name: "Temperature (°C)", icon: Thermometer, value: null },
];

const App = () => {
  return (
    <div className="flex bg-[#c3e8d6]" >
      {/* Sidebar */}
        <Sidebar
          onScrollToSection={(sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
          section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
        {/* Logo at Top Left */}
      <div className="absolute top-4 left-4">
        <img src="/logo.webp" alt="App Logo" className="h-12 w-12" />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center min-h-screen mt-16 p-6">
        <h1 className="text-4xl font-bold ml-2 w-full">Homify</h1>
        <p className="text-gray-600 mb-6 mt-3 ml-2 w-full">Guten Morgen, Dr. Ranjana Vyas !</p>

        {/* Device Cards - Responsive Grid */}
        <p id="control-devices" className="text-gray-800 font-medium text-xl mb-4 mt-3 ml-2 w-full">Control Devices</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>

        {/* Details Cards - Responsive Grid */}
        <p id="see-details" className="text-gray-800 font-medium text-xl mb-4 mt-8 ml-2 w-full">Device Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {details.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>

        {/* About Section */}
        <p id="about" className="text-gray-800 font-medium text-xl mb-4 mt-8 ml-2 w-full">About Homify</p>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <p className="text-gray-700 text-base">
            Homify is your smart home assistant, designed to make your life easier and more efficient. 
            With Homify, you can control and monitor your home devices seamlessly, all in one place. 
            Our mission is to bring convenience and innovation to your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
