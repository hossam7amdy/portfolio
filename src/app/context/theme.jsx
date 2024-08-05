"use client";

import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const localTheme = localStorage.getItem("theme") ?? "light";

    localStorage.setItem("theme", localTheme);

    setTheme(localTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;

    const isLight = theme === "light";

    document.body.classList[isLight ? "remove" : "add"]("dark-theme");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);

    setTheme(newTheme);
  };

  const themeProvider = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeProvider}>
      {props.children}
    </ThemeContext.Provider>
  );
};
