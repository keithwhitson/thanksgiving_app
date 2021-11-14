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

const dessert = all_recipes.filter(recipe => recipe.dishType.includes('dessert'))

const Desserts = () => {
    return (
          <div className="stock-container">
            <h1 className="text-center">Desserts</h1>
            {dessert.map((data, key) => {
              return (
                <div key={key} className="center">
                  <div className="image">
                        <Card image={data.image} title={data.label}/>
                  </div>
                </div>
              );
            })}
          </div>
    );
};
  
export default Desserts;