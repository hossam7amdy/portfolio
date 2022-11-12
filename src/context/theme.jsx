import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const curTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(curTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList[theme === "light" ? "remove" : "add"]("dark-theme");
  }, [theme]);

  const toggleTheme = () => {
    const isLight = theme === "light";
    setTheme(isLight ? "dark" : "light");
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
