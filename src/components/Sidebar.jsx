import React, { useState, useEffect } from "react";
import { Menu, Home, Info, List, Power } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showIcons, setShowIcons] = useState(false);

  const toggleSidebar = () => {
    if (isCollapsed) {
      setShowIcons(true);
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
      setTimeout(() => setShowIcons(false), 300);
    }
  };

  const collapseSidebar = () => {
    setIsCollapsed(true);
    setTimeout(() => setShowIcons(false), 300);
  };

  const handleNavigation = (id) => {
    const navigateTo = () => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.error(`Section with ID "${id}" not found.`);
        }
      }
      collapseSidebar();
    };

    if (isCollapsed) {
      setShowIcons(true);
      setIsCollapsed(false);
      setTimeout(navigateTo, 350);
    } else {
      navigateTo();
    }
  };

  // Collapse sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.querySelector(".transition-all");
      const menuButton = document.querySelector(".absolute.top-4.right-4");
      if (
        sidebarElement &&
        !sidebarElement.contains(event.target) &&
        menuButton &&
        !menuButton.contains(event.target)
      ) {
        collapseSidebar();
        menuButton.style.color = "black";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "w-0" : "w-56"
      } flex flex-col fixed top-0 right-0 h-full z-50`}
    >
      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 rounded-md bg-transparent text-black hover:text-gray-700 cursor-pointer"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar Items */}
      {showIcons && (
        <div className="bg-[#b9e4dc42] text-black flex flex-col rounded-b-2xl rounded-l-2xl mt-13 ml-10 mr-6 overflow-y-auto shadow-xl backdrop-blur-lg h-56 ">
          <nav className="flex flex-col flex-grow p-2">
            <SidebarItem
              icon={Home}
              label="Home"
              isCollapsed={isCollapsed}
              onClick={() => handleNavigation("home")}
            />
            <SidebarItem
              icon={Power}
              label="Control"
              isCollapsed={isCollapsed}
              onClick={() => handleNavigation("control-devices")}
            />
            <SidebarItem
              icon={List}
              label="Details"
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

const SidebarItem = ({ icon: Icon, label, isCollapsed, onClick }) => {
  return (
    <div
      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[#d3cff8] transition-colors duration-200 cursor-pointer"
      onClick={onClick}
    >
      <Icon size={24} className="shrink-0 text-gray-800" />
      {!isCollapsed && <span className="text-lg font-normal text-gray-800">{label}</span>}
    </div>
  );
};


export default Sidebar;
