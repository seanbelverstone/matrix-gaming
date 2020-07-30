import React, { Component } from 'react';
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
import TopNav from "./components/TopNav";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tournaments" component={Tournaments} />
            <Route path="/matrixAcademy"component={MatrixAcademy} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
