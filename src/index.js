import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { darkTheme } from "./theme";
import { useThemeState } from "./hooks";

function Index() {
  const [theme, toggleTheme] = useThemeState(darkTheme);

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
