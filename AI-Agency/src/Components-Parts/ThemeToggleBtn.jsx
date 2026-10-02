import { useEffect } from "react";
import { assets } from "../assets/export_assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Check the user's system/browser preference for dark mode
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Set the theme to the current theme,
    // or use the system preference if no theme is set
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  });

  // Run this whenever the "theme" value  / if statement of toggle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the selected theme in the browser's localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // This effect runs whenever "theme" changes

  return (
    <>
      {/* Button that contains the theme icon */}
      <button>
        {/* 
        Check the current theme:
        If the theme is "dark", show the Sun icon.
        Clicking the Sun changes the theme to "light".
       */}
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.Sun_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        ) : (
          /*
          If the theme is NOT dark (light mode),
          show the Moon icon.
          Clicking the Moon changes the theme to "dark".
          */
          <img
            onClick={() => setTheme("dark")}
            src={assets.Moon_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
