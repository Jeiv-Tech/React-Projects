import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div
      className="flex justify-between items-center px-4 sm:px-12 
    lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-×1 font-medium 
    bg-white/50 dark:bg-gray-900/70"
    >
      <img
        src={
          theme === "dark" ? assets.White_Theme_Logo : assets.Dark_Theme_Logo
        }
        className="w-23 sm:w-40"
        alt=""
      />
    </div>
  );
};

export default Navbar;
