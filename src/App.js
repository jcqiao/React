import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route to="/" exact />
      </Switch>
    </div>
  );
}

export default App;
