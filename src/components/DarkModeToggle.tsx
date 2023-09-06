import { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user preference
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode) {
      setDarkMode(JSON.parse(isDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the body element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save user preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-slate-300 hover:bg-gray-800" 
    >
      {darkMode ? <IoSunny /> : <IoMoon/>}
    </button>
  );
};

export default DarkModeToggle;
