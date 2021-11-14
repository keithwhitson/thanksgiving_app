
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import "./App.css";
import Desserts from "./Desserts";
import Drinks from "./Drinks"
import Home from "./Home"
import Hello from "./Hello"
import MainCourse from "./MainCourse"
import Starters from "./Starters"
import Navbar from "./NavBar"

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route exact path="/hello">
            <Hello />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/maincourse">
            <MainCourse />
          </Route>
          <Route path="/starters">
            <Starters />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App