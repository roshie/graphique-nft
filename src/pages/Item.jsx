export default function Item(props) {
  return (
    <>
      <button onClick={props.toggleTheme}>Toggle theme</button>
      <h1>It's a {props.theme.themeName} theme!</h1>
      <footer></footer>
    </>
  );
}
