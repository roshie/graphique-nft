import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";

export function useThemeState(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    if (theme.themeName === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    // Trigger something
  });

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
