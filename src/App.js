
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
    <HeaderImage />
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
          <Route path="/wholerecipe">
            <WholeRecipe />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/where">
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