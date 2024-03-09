import React, { useState, useEffect } from "react";

const SwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update theme based on isDarkMode state
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-[160px] h-8 rounded-full bg-white text-black flex justify-between px-3 items-center font-bold cursor-pointer"
          onClick={toggleTheme}
        >
          <p
            className={`text-black ${
              isDarkMode ? "opacity-50 cursor-pointer" : ""
            }`}
          >
            Dark
          </p>
          <p className={`${isDarkMode ? "" : "opacity-50 cursor-pointer"}`}>
            Light
          </p>
        </div>
        <div
          className={`absolute h-8 w-[80px] bg-black top-0 cursor-pointer left-0 rounded-full border-2 ${
            isDarkMode ? "transform translate-x-full" : ""
          }`}
        >
          {isDarkMode ? (
            <p className="text-white pl-5 font-bold">Light</p>
          ) : (
            <p className="pl-4 pt-[.1rem] font-bold">Dark</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SwitchTheme;
