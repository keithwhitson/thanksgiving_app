
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
import WholeRecipe from './WholeRecipe';
import Recipes from "./Recipes"
import HeaderImage from "./HeaderImage"
import WhereAmi from './WhereAmi';

function App() {
  return (
    <>
    <Router>
    <div id="nav-head">
    <HeaderImage />
    <Navbar />
    </div>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/thanksgiving_app">
            <Home />
          </Route>
          <Route path="/thanksgiving_app/desserts">
            <Desserts />
          </Route>
          <Route exact path="/hello">
            <Hello />
          </Route>
          <Route path="/thanksgiving_app/drinks">
            <Drinks />
          </Route>
          <Route path="/thanksgiving_app/maincourse">
            <MainCourse />
          </Route>
          <Route path="/thanksgiving_app/starters">
            <Starters />
          </Route>
          <Route path="/thanksgiving_app/wholerecipe">
            <WholeRecipe />
          </Route>
          <Route path="/thanksgiving_app/recipes">
            <Recipes />
          </Route>
          <Route path="/thanksgiving_app/where">
            <WhereAmi />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App