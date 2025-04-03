import React from "react";
import "tailwindcss"

const TempHumidity = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">Temperature</h3>
        <p className="text-2xl font-bold text-blue-500">22°C</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Humidity</h3>
        <p className="text-2xl font-bold text-green-500">60%</p>
      </div>
    </div>
  );
};

export default TempHumidity;
