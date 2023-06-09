import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router basename= '/Project2_PokemonWeakness/'>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
