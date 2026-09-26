import { assets } from "../assets/export_assets";

// Navbar component receives the current theme and the function to change the theme
const Navbar = ({ theme, setTheme }) => {
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
          theme === "dark" ? assets.White_Theme_Logo : assets.Dark_Theme_Logo
        }
        // Set the logo width for different screen sizes
        className="w-23 sm:w-40"
      />
    </div>
  );
};

export default Navbar;
