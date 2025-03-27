// app/context/ThemeContext.js
import { createContext, useContext, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use the Theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to wrap the app and provide context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
