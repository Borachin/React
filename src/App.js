import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return <HashRouter>
    <Route path="/">
      <h1>
        
      </h1>
    <Route path="/about" component={About} />
  </HashRouter>
}

export default App;