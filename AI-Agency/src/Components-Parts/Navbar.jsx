import { useState } from "react";
import { assets } from "../assets/export_assets";

// Navbar component receives the current theme and the function to change the theme
const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      // Navbar layout, spacing, sticky position, blur, font, and background
      className="flex justify-between items-center px-4 sm:px-12 
    lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-×1 font-medium 
    bg-white/50 dark:bg-gray-900/70"
    >
      <img
        // Change the logo depending on the current theme
        // Dark theme = White logo
        // Light theme = Dark logo
        src={
          theme === "dark" ? assets.Dark_Theme_Logo : assets.White_Theme_Logo
        }
        // Set the logo width for different screen sizes
        alt=""
        className="w-23 sm:w-40"
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm 
        ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary
        max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all 
        ${theme === "dark" ? "text-white" : "text-gray-700"}`}
      >
        <img
          src={assets.Close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-Work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm-gap-4">
        <img
          src={theme === "dark" ? assets.Menu_icon_dark : assets.Menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />
        <a
          href="#contact-us"
          className={`text-sm max-sm:hidden flex item-center gap-2 
          bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all
          ${theme === "dark" ? "text-white" : "text-gray-700"}`}
        >
          Connect <img src={assets.Arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
