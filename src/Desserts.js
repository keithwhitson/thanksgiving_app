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

let dessert = all_recipes.filter(recipe => recipe.dishType.includes('dessert'))

// dessert = dessert.filter((item, index) => index < 5)

const Desserts = () => {
    return (
      <>
      <h1 className="center-heading">Desserts</h1>
          <div className="dessert-container">

            {dessert.map((data, key) => {
              return (
                <div key={key} >
                  <div className="dessert-card">
                        <Card image={data.image} title={data.label} ingredientsList={data.ingredientsList}/>
                  </div>
                </div>
              );
            })}
          </div>
          </>
    );
};
  
export default Desserts;