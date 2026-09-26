import { useState } from "react";
import Navbar from "./Components-Parts/Navbar";

const App = () => {
  // Create a theme state with "light" as the default theme
  // theme = current theme
  // setTheme = function used to change the theme
  const [theme, setTheme] = useState("light");

  return (
    // Main container of the application
    // Display the Navbar and pass the theme and setTheme to it
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
