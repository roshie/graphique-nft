import Layout from "../components/Layout";
import { lightTheme, darkTheme } from "../theme";

export default function Home() {
  const toggleTheme = () => {
    //   if (theme.themeName === "light") {
    //     setTheme(darkTheme);
    //   } else {
    //     setTheme(lightTheme);
    //   }
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>It's a {darkTheme.themeName} theme!</h1>
      <footer></footer>
    </div>
  );
}
