import { useState } from "react";
import Navbar from "./Components-Parts/Navbar";

const App = () => {
  // Create a "theme" state.
  // Check localStorage to see if a theme was saved before.
  // If there is no saved theme, use "light" as the default.
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    // Main container of the application
    // "dark:bg-black" makes the background black when dark mode is active
    // "relative" allows elements inside to use relative positioning
    //
    // Pass "theme" and "setTheme" to the Navbar
    // so the Navbar can display and change the current theme
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
