import React, { useState, useEffect } from "react";
import { ref, get, set } from "firebase/database";

const DeviceCard = ({ device, mode = "control", db }) => {
  const [isOn, setIsOn] = useState(device.isOn || false);
  const IconComponent = device.icon;

  // Sync with Firebase if data changes
  useEffect(() => {
    setIsOn(device.isOn || false);
  }, [device.isOn]);

  const handleToggle = async () => {
    const newState = !isOn;
    setIsOn(newState);

    try {
      const homeRef = ref(db, "homeData");
      const snapshot = await get(homeRef);
      const data = snapshot.val();

      if (data && Array.isArray(data.devices)) {
        const updatedDevices = data.devices.map((d) =>
          d.name === device.name ? { ...d, isOn: newState } : d
        );

        await set(homeRef, {
          ...data,
          devices: updatedDevices,
        });

        console.log(`Toggled ${device.name} to ${newState ? "ON" : "OFF"}`);
      }
    } catch (err) {
      console.error("Error toggling device:", err);
    }
  };

  if (mode === "detail") {
    return (
      <div className="p-4 bg-[#ffe5ec] border-1 border-[#8771ea] rounded-3xl flex justify-between items-center w-full">
        <div className="text-left">
          <p className="text-2xl font-bold text-gray-800">
            {device.value !== null ? device.value : "--"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {IconComponent && <IconComponent className="w-6 h-6 text-green-600" />}
          <h3 className="font-semibold text-gray-700">{device.name}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#ffe5ec] border-1 border-[#8771ea] rounded-3xl flex flex-col items-center w-full">
      {IconComponent && (
        <IconComponent className={`w-12 h-12 ${isOn ? "text-blue-500" : "text-gray-500"}`} />
      )}
      <h3 className="mt-2 font-semibold">{device.name}</h3>
      <div className="mt-3 flex items-center">
        <span className="mr-2 text-sm font-medium text-gray-700">{isOn ? "On" : "Off"}</span>
        <label className="inline-flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={isOn}
              onChange={handleToggle}
              className="sr-only"
            />
            <div
              className={`w-10 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                isOn ? "bg-green-500 border-green-600" : "bg-gray-300 border-gray-400"
              }`}
            ></div>
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full border-2 shadow transform transition-transform duration-300 ${
                isOn ? "translate-x-4 border-green-600" : "translate-x-0 border-gray-400"
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DeviceCard;
