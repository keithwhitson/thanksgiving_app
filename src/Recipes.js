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

                <div className="image">
                    <img src={data.image} alt="" width="700" height="700" />
                </div>
                
                <div className="label">
                    <p><b>Label: </b></p>
                    <p>{data.label}</p>
                </div>
                
                <div className="source">
                    <p><b>Source: </b></p>
                    <p>{data.source}</p>
                </div>
                
                <div className="calories">
                    <p><b>Calories: </b></p>
                    <p>{data.calories}</p>
                </div>
 
                <div className="dishtype-container">
                <p><b>DishType: </b></p>
                {data.dishType.map(item => {
                    return <p>{item}</p>;
                })}
                </div>

                <div className="cautions">
                <p><b>Cautions: </b></p>
                {data.cautions.map(item => {
                    return <p>{item}</p>;
                })}
                </div>

                <div className="cuisine-type">
                <p><b>Cuisine Type: </b></p>
                {data.cuisineType.map(item => {
                    return <p>{item}</p>;
                })}
                </div>

                <div className="diet-labels">
                <p><b>Diet Labels: </b></p>
                {data.dietLabels.map(item => {
                    return <p>{item}</p>;
                })}
                </div>

                <div className="health-labels">
                <p><b>Health Labels: </b></p>
                {data.healthLabels.map(item => {
                    return <p>{item}</p>;
                })}
                </div>

                <div className="ingredients">
                <p><b>Ingredient Lines: </b></p>
                {data.ingredientLines.map(item => {
                    return <p>{item}</p>;
                })}
                </div>


                <div className="meal-type">
                <p><b>Meal Type: </b></p>
                {data.mealType.map(item => {
                    return <p>{item}</p>;
                })}
                </div>


                <div className="share-as">
                    <p><a href={data.shareAs}>Share As</a></p>
                </div>

                <div className="total-time">
                    <p><b>Total Time: </b></p>
                    <p>{data.totalTime}</p>
                </div>

                <div className="total-weight">
                    <p><b>Total Weight: </b></p>
                    <p>{data.totalWeight}</p>
                </div>

                <div className="uri">
                <p><a href={data.uri} target="_blank" rel="noreferrer">uri</a></p>
                </div>





              </div>
            );
          })}
        </div>
      </>
    );
  };