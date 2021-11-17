import Card from "./Card"


const drinks = [ 
  {label:'Cranberry Appe-teaser',
  image:'https://foodpharmacy.blog/img-jpg/celestial-seasonings-herbal-tea-cranberry-apple-zinger-caffeine-free-20-tea-bags-1-5-oz-42-g.jpg',
  ingredientsLines:['2 cups (1 pint) Ocean Spray Cranberry Juice Cocktail',
  '2 cups orange juice',
  '4 thin slices of lemon',
  '1 tablespoon sugar',
  '¼ teaspoon cinnamon',
  'Dash nutmeg'],
  instructions:'Mix all ingredients in saucepan. Simmer slowly for 10 minutes. Remove lemon slices. Serve hot with orange garnish. Makes 1 quart. Serve cold: Simmer lemon, sugar, spices with 1 cup of the cranberry juice. Add remaining fruit juices. Chill. Serve over ice mold or cubes.'},
  
  {label:'Cranberry Iced Tea',
  image:'https://images-gmi-pmc.edge-generalmills.com/cb69c587-4188-484b-8da3-8b3a4746dfdf.jpg',
  ingredientsLines:['Ocean Spray Cranberry Juice Cocktail','Cold Tea'],
  instructions:'In large pitchers mix together equal portions of chilled Ocean Spray Cranberry Juice Cocktail and cold tea. Pour over ice cubes in tall glasses to serve.'},

  {label:'The Cape Codder',
  image:'https://www.thespruceeats.com/thmb/WfuX8oExRHWs4E9Io2KKfGLZBw4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cape-codder-recipe-759287-hero-02-3a6a5296acf146c197a656adff8bbacb.jpg',
  ingredientsLines:['2 jiggers Ocean Spray Cranberry Juice Cocktail',
    '1 jigger vodka (rum, if you prefer)'],
  instructions:'Serve over the rocks or tall with soda. A splash of lime or lemon optional.'},

  {label:'',
  image:'https://www.gutenberg.org/cache/epub/66654/images/p16.jpg',
  ingredientsLines:[],
  instructions:''}
]

const Drinks = () => {
    return (
          <div className="drinks-container">
            <h1 className="">Drinks</h1>
            {drinks.map((data, key) => {
              return (
                <div key={key}>
                  <div className="drink">
                  <Card image={data.image} title={data.label} ingredientsList={data.ingredientsLines} instructions={data.instructions}/>
                  </div>
                </div>
              );
            })}
          </div>
    );
};
  
export default Drinks;