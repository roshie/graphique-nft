import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    if (theme.themeName === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>It's a {theme.themeName} theme!</h1>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
