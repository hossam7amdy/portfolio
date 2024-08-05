import { useContext } from "react";

import { BiSun } from "react-icons/bi";
import { HiOutlineMoon } from "react-icons/hi";

import { ThemeContext } from "../../context/theme";

export const ColorModeSwitcher = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isLight = theme === "light";
  const Icon = isLight ? HiOutlineMoon : BiSun;

  return (
    <button aria-label="toggle theme" onClick={toggleTheme}>
      <Icon className={className} />
    </button>
  );
};
