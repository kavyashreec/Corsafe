import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TrackerHome from "./TrackerHome";
import Home from "./Home";
import News from "./News";


const App = () => {
  return (
      <Router>
        <div>
          <Route exact path="/tracker" component={TrackerHome} />
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />


        </div>
      </Router>
  );
};

export default App;