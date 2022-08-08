import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Casual from "./Theme/Casual";
import Corporate from "./Theme/Corporate";
import Condensed from "./Theme/Condensed";
import Simple from "./Theme/simple";
import Executive from "./Theme/Executive";
import Login from "./components/Extra/Login"
import Landing from "./components/Landing"
import Extra400 from "./components/Extra/404Page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            {/* Uncomment the routes below if you want to view all the themes (remember to uncomment the imports as well*/}
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/casual">
              <Casual />
            </Route>
            <Route path="/corporate">
              <Corporate />
            </Route>
            <Route path="/condensed">
              <Condensed />
            </Route>
            <Route path="/simple">
              <Simple />
            </Route>
            <Route path="/executive">
              <Executive />
            </Route>
            <Route path='*'>
              <Extra400 />
            </Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
