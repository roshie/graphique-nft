import Layout from "../components/Layout";
export default function Item(props) {
  return (
    <Layout>
      <button onClick={props.toggleTheme}>Toggle theme</button>
      <h1>It's a {props.theme.themeName} theme!</h1>
      <footer></footer>
    </Layout>
  );
}
