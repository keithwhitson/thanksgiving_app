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
          <div className="stock-container center">
            <h1 className="text-center">Main Course</h1>
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
    );
};
  
export default MainCourse;