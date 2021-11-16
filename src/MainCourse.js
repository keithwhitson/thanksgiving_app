import React from "react";
import Card from "./Card"
import RecipeData from "./recipeDataFile"

const hits = RecipeData.map((data) => data.hits);
var all_recipes = []

hits.map((hitarray, key) =>{
  hitarray.map((data, key) => {
    all_recipes.push(data.recipe)
  })
})

all_recipes = all_recipes.filter((item,index) => item.dishType)

const maincourse = all_recipes.filter(recipe => recipe.dishType.includes('main course'))

const MainCourse = () => {
    return (

      <React.Fragment>
            <h1 className="">Main Course</h1>
            <div className="maincourse-container">
            {maincourse.map((data, key) => {
              return (
                <div key={key}>
                  <div className="image">
                        <Card image={data.image} title={data.label} ingredientsList={data.ingredientsList}/>
                  </div>
                </div>
              );
            })}
          </div>
      </React.Fragment>

    );
};
  
export default MainCourse;