import React, { useState } from "react";
import { Menu, Home, Lightbulb, Fan, Thermometer } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-60"}`}>
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h1 className="text-lg font-bold">Smart Home</h1>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-gray-300 hover:text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col space-y-4 mt-6">
        <SidebarItem icon={Home} label="Dashboard" isCollapsed={isCollapsed} />
        <SidebarItem icon={Lightbulb} label="Lights" isCollapsed={isCollapsed} />
        <SidebarItem icon={Fan} label="Fans" isCollapsed={isCollapsed} />
        <SidebarItem icon={Thermometer} label="AC" isCollapsed={isCollapsed} />
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, isCollapsed }) => {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-700 cursor-pointer">
      <Icon size={24} />
      {!isCollapsed && <span className="text-lg">{label}</span>}
    </div>
  );
};

export default Sidebar;
