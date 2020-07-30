import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";
import MatrixAcademy from "./pages/MatrixAcademy";
import Subscribe from "./pages/Subscribe";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tournaments">
            <Tournaments />
          </Route>
          <Route path="/matrixAcademy">
            <MatrixAcademy />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
