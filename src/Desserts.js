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

const Desserts = () => {
    return (
      <>
      <h1 className="center-heading">Desserts</h1>
          <div className="dessert-container">
            
            {dessert.map((data, key) => {
              {console.log(data.ingredientLines)}
              return (
                <div key={key} >
                  <div className="dessert-card">
                        <Card image={data.image} title={data.label} ingredientsList={data.ingredientLines} instructions={data.instructions}/>
                  </div>
                </div>
              );
            })}
          </div>
          </>
    );
};
  
export default Desserts;