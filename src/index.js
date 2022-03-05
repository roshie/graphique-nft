import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./global";
import { lightTheme, darkTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
