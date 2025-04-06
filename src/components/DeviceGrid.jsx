import React from "react";
import DeviceCard from "./DeviceCard";
import { Lightbulb, Fan, Thermometer } from "lucide-react";
import "tailwindcss"

const devices = [
  { name: "Living Room Light", icon: Lightbulb, isOn: false },
  { name: "Bedroom Fan", icon: Fan, isOn: false },
  { name: "AC Unit", icon: Thermometer, isOn: false },
];

const DeviceGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {devices.map((device, index) => (
        <DeviceCard key={index} device={device} />
      ))}
    </div>
  );
};

export default DeviceGrid;
