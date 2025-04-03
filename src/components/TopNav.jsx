import React from "react";
import { Bell, User } from "lucide-react";
import "tailwindcss"

const TopNav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Smart Home</h1>
      <div className="flex space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <User className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNav;
