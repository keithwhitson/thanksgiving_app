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

const drink = []

const labels = []

hits.map((hitarray, key) =>{
    hitarray.map((data, key) => {
        //labels.push(data.recipe.label)
        //console.log(typeof data.recipe.label)
        if(data.recipe.label.includes("thanksgiving")){
            console.log(data.recipe.label)
        } 
        
        //console.log(data.recipe.label.includes("cocktail"))
    })
})

//console.log(labels)

console.log(all_recipes[0])

const Drinks = () => {
    return (
          <div className="stock-container">
            <h1 className="text-center">Drinks</h1>
            {drink.map((data, key) => {
              return (
                <div key={key}>
                  <div className="drink">
                  <Card image={data.image} title={data.label} ingredientsList={data.ingredientsList}/>
                  </div>
                  {console.log(data.dishType)}
                </div>
              );
            })}
          </div>
    );
};
  
export default Drinks;