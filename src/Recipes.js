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
                <img src={data.image} width="700" height="700" />
                <p><b>Label: </b></p>
                <p>{data.label}</p>
                <p><b>Source: </b></p>
                <p>{data.source}</p>
                <p><b>Calories: </b></p>
                <p>{data.calories}</p>
                <div classNme="dishtype-container">
                <p><b>DishType: </b></p>
                {data.dishType.map(item => {
                    return <p>{item}</p>;
                })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };