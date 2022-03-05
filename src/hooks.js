import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";

export function useThemeState(initialTheme) {
  const initTheme = localStorage.getItem("theme")==="light"?lightTheme: darkTheme || initialTheme;
  const [theme, setTheme] = useState(initTheme);

  const toggleTheme = () => {
    if (theme.themeName === "light") {
      setTheme(darkTheme);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(lightTheme);
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    return () => {
     
    };
  }, [theme]); 

  return [theme, toggleTheme];
}

export const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.addEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
};
