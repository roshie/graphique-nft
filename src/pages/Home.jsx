import Layout from "../components/Layout";
import { useThemeState } from "../hooks";

export default function Home() {
  const [theme, setTheme] = useThemeState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Layout>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>It's a {theme} theme!</h1>
      <footer></footer>
    </Layout>
  );
}
