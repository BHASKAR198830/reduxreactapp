import logo from "./logo.svg";
import "./App.css";
import User from "./component/User";

function App() {
  return (
    <div>
      <h1>App component</h1>
      <User data={{ name: "Bhaskar", car: "Honda City" }} />
    </div>
  );
}

export default App;
