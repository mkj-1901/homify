import React, { useState } from "react";
import { Menu, Lightbulb, Fan, Thermometer, User, Settings, Info } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showIcons, setShowIcons] = useState(false);

  const toggleSidebar = () => {
    if (isCollapsed) {
      document.querySelector(".absolute.top-4.right-4").style.color = "white";
      setShowIcons(true);
      setIsCollapsed(false);
    } else {
      document.querySelector(".absolute.top-4.right-4").style.color = "black";
      setIsCollapsed(true);
      setTimeout(() => setShowIcons(false), 300);
    }
  };

  return (
    <div className={`transition-all duration-300 ${isCollapsed ? "w-0" : "w-72"} h-screen flex flex-col`}>
      {/* Menu Button - Always Visible */}
        <button 
          onClick={toggleSidebar} 
          className="absolute top-4 right-4 p-2 rounded-md bg-transparent text-black hover:text-gray-700">
          <Menu size={28} />
        </button>

        {/* Sidebar Items - Show only when expanded */}
      {showIcons && (
        <div className="h-screen bg-[#131010] text-white flex flex-col p-4">
          <nav className="flex flex-col space-y-4 mt-6 py-6 flex-grow">
            <SidebarItem icon={User} label="Account" isCollapsed={isCollapsed} />
            <SidebarItem icon={Lightbulb} label="Lights" isCollapsed={isCollapsed} />
            <SidebarItem icon={Fan} label="Fans" isCollapsed={isCollapsed} />
            <SidebarItem icon={Thermometer} label="AC" isCollapsed={isCollapsed} />
          </nav>

          <div className="mt-auto flex flex-col space-y-4 mb-4 px-1.5">
            <SidebarItem icon={Settings} label="Settings" isCollapsed={isCollapsed} />
            <SidebarItem icon={Info} label="About Us" isCollapsed={isCollapsed} />
          </div>
        </div>
      )}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, isCollapsed }) => {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-700 cursor-pointer">
      <Icon size={24} className="shrink-0"/>
      {!isCollapsed && <span className="text-lg">{label}</span>}
    </div>
  );
};

export default Sidebar;

