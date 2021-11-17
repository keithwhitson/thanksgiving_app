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

const starter = all_recipes.filter(recipe => recipe.dishType.includes('starter'))

const Starter = () => {
    return (
      <><h1 className="">Starters</h1>
          <div className="starters-container">
            
            {starter.map((data, key) => {
              return (
                <div key={key}>
                  <div className="starters-card">
                    <Card image={data.image} title={data.label} ingredientsList={data.ingredientLines}/>
                  </div>
                </div>
              );
            })}
          </div>
          </>
    );
};
  
export default Starter;