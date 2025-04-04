import React, { useState } from "react";
import { Menu, Lightbulb, Thermometer, User, Info } from "lucide-react";

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

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with ID "${id}" not found. Ensure the target element has the correct ID.`);
    }
  };
  // Collapse sidebar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.querySelector(".transition-all");
      const menuButton = document.querySelector(".absolute.top-4.right-4");
      if (
        sidebarElement &&
        !sidebarElement.contains(event.target) &&
        menuButton &&
        !menuButton.contains(event.target)
      ) {
        setIsCollapsed(true);
        setTimeout(() => setShowIcons(false), 300);
        menuButton.style.color = "black";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`transition-all duration-300 ${isCollapsed ? "w-0" : "w-56"} flex flex-col absolute right-0`}>
      {/* Menu Button - Always Visible */}
      <button 
        onClick={toggleSidebar} 
        className="absolute top-4 right-4 p-2 rounded-md bg-transparent text-black hover:text-gray-700">
        <Menu size={28} />
      </button>

      {/* Sidebar Items - Show only when expanded */}
      {showIcons && (
        <div className="bg-[#131010b9] text-white flex flex-col rounded-l-2xl rounded-b-2xl">
          <nav className="flex flex-col flex-grow">
            <SidebarItem 
              icon={User} 
              label="Account" 
              isCollapsed={isCollapsed} 
              onClick={() => handleNavigation("account")} 
            />
            <SidebarItem 
              icon={Lightbulb} 
              label="Control Devices" 
              isCollapsed={isCollapsed} 
              onClick={() => handleNavigation("control-devices")} 
            />
            <SidebarItem 
              icon={Thermometer} 
              label="See Details" 
              isCollapsed={isCollapsed} 
              onClick={() => handleNavigation("see-details")} 
            />
            <SidebarItem 
              icon={Info} 
              label="About" 
              isCollapsed={isCollapsed} 
              onClick={() => handleNavigation("about")} 
            />
          </nav>
        </div>
      )}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, isCollapsed }) => {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
      <Icon size={24} className="shrink-0"/>
      {!isCollapsed && <span className="text-lg">{label}</span>}
    </div>
  );
};

export default Sidebar;

