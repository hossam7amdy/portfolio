'use client';

import { createContext, useState, useEffect, useRef } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined);
  const themeLoaded = useRef(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    setTheme(localTheme);
    document.body.classList.toggle('dark-theme', localTheme === 'dark');
    themeLoaded.current = true;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (!themeLoaded.current) return null; // Avoid flicker by not rendering until theme is loaded

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
