import React from "react";
import "./App.css";
import {recipeInfo} from "./recipe_info"

export const Recipes = () => {
    return (
      <>
        <div className="stock-container">
          {recipeInfo.map((data, key) => {
            return (
              <div key={key}>
                <img src={data.image} width="400" height="400" />
              </div>
            );
          })}
        </div>
      </>
    );
  };