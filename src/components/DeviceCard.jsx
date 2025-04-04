import React, { useState } from "react";

const DeviceCard = ({ device }) => {
  const [isOn, setIsOn] = useState(device.isOn);
  const IconComponent = device.icon;

  return (
    <div className="p-4 bg-[#f7d4a7] shadow-md rounded-xl flex flex-col items-center w-56">
      {IconComponent && <IconComponent className={`w-12 h-12 ${isOn ? "text-blue-500" : "text-gray-500"}`} />}
      <h3 className="mt-2 font-semibold">{device.name}</h3>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`mt-3 px-4 py-2 text-white rounded-lg ${isOn ? "bg-red-500" : "bg-green-500"}`}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default DeviceCard;
