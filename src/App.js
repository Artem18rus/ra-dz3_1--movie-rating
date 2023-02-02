import "./css/App.css";
import Stars from "./components/Stars";

function App() {
  let count = 3;

  return <Stars count={count > 0 && count < 6 ? count : null} />;
}

export default App;
