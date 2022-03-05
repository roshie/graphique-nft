import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import { useThemeState, useThemeDetector } from "./hooks";

function Index() {
  const isDarkTheme = useThemeDetector();
  const [theme, toggleTheme] = useThemeState(
    isDarkTheme ? darkTheme : lightTheme
  );

  useEffect(() => {
    console.debug(theme);
  }, [theme]);

  const themeProp = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App theme={themeProp} />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
