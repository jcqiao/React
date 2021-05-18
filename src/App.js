import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
