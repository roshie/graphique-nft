import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import { useThemeState } from "./hooks";

function Index() {
  const [theme] = useThemeState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
