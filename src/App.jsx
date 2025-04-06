import React from "react";
import Sidebar from "./components/Sidebar";
import DeviceCard from "./components/DeviceCard";
import ImageSlider from "./components/ImageSlider";
import { Lightbulb, Fan, Thermometer, AirVent, Sun } from "lucide-react";

const userName = "Dr. Ranjana Vyas"
// Device and Environment Data
const devices = [
  { name: "Living Room Light", icon: Lightbulb, isOn: false },
  { name: "Bedroom Fan", icon: Fan, isOn: false },
  { name: "AC Unit", icon: AirVent, isOn: false },
];

const lightIntensity = Math.floor(Math.random() * 100); // 0 to 100 %
const temperature = (20 + Math.random() * 10).toFixed(1); // 20.0°C to 30.0°C

const details = [
  { name: "Light Intensity", icon: Sun, value: `${lightIntensity}%` },
  { name: "Temperature (°C)", icon: Thermometer, value: `${temperature}°C` },
];

const App = () => {
  return (
    <div className="flex bg-gradient-to-b from-[#c3e8d6] via-[#d3cff8] to-[#9c8fcc] min-[]:h-screen relative">
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

      {/* Main Content */}
        <div className="flex-1 flex flex-col items-center min-h-screen mt-16 p-6">
          <h1 className="text-4xl font-bold ml-2 w-full text-[#0b0615]">Homify</h1>
          <p className="text-gray-800 mb-6 mt-3 ml-2 w-full">
            Guten Morgen, {userName}!
          </p>

          {/* Image Slider */}
        <ImageSlider />
        <br id="control-devices" />
        {/* Device Control Section */}
        <p className="text-gray-900 font-bold text-2xl mb-4 mt-6 ml-2 w-full">
          Control Devices
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>
        {/* Environment Details Section */}
        <br id="see-details" />
        <p className="text-gray-900 font-bold text-2xl mb-4 mt-8 ml-2 w-full">
          Environment Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full max-w-4xl">
          {details.map((device, index) => (
            <DeviceCard key={index} device={device} mode="detail" />
          ))}
        </div>
        {/* About Section */}
        <br id="about" />
        <p className="text-gray-900 font-bold text-2xl mb-4 mt-8 ml-2 w-full">
          About Homify
        </p>
        <div className="bg-[#ffe5ec] border-1 border-[#8771ea] p-6 rounded-lg shadow-md w-full max-w-4xl">
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Homify</strong> is a smart home automation project that
            empowers users to control and monitor devices like lights, fans, and
            ACs remotely. Built using <strong>IoT technology</strong> and a{" "}
            <strong>Raspberry Pi</strong>, it offers real-time interaction with
            connected smart devices in your home.
            <br />
            <br />
            <strong>Key Features:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Remote device control with live status updates</li>
              <li>Environmental monitoring via sensors</li>
              <li>Responsive dashboard with interactive UI and image slider</li>
            </ul>
            <br />
            <strong>Team Members:</strong>
            <br />
            Mayank Kumar Jha (
            <a href="mailto:IIB2024010@iiita.ac.in" target="_blank">
              IIB2024010
            </a>
            )<br />
            Krish Dhaked (
            <a href="mailto:IIB2024008@iiita.ac.in" target="_blank">
              IIB2024008
            </a>
            )<br />
            Himanshu Vitthalani (
            <a href="mailto:IIB2024009@iiita.ac.in" target="_blank">
              IIB2024009
            </a>
            )<br />
            Archee Jaiswal (
            <a href="mailto:IIB2024022@iiita.ac.in" target="_blank">
              IIB2024022
            </a>
            )
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
