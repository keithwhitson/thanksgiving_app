import Card from "./Card"


const midrinke = [ 
  {label:'Cranberry Appe-teaser',
  image:'https://www.gutenberg.org/cache/epub/66654/images/p16.jpg',
  ingredientsList:['2 cups (1 pint) Ocean Spray Cranberry Juice Cocktail',
  '2 cups orange juice',
  '4 thin slices of lemon',
  '1 tablespoon sugar',
  '¼ teaspoon cinnamon',
  'Dash nutmeg'],
  instructions:'Mix all ingredients in saucepan. Simmer slowly for 10 minutes. Remove lemon slices. Serve hot with orange garnish. Makes 1 quart. Serve cold: Simmer lemon, sugar, spices with 1 cup of the cranberry juice. Add remaining fruit juices. Chill. Serve over ice mold or cubes.'},
  
  {label:'Cranberry Iced Tea',
  image:'https://www.gutenberg.org/cache/epub/66654/images/p16.jpg',
  ingredientsList:['Ocean Spray Cranberry Juice Cocktail','Cold Tea'],
  instructions:'In large pitchers mix together equal portions of chilled Ocean Spray Cranberry Juice Cocktail and cold tea. Pour over ice cubes in tall glasses to serve.'},

  {label:'',
  image:'https://www.gutenberg.org/cache/epub/66654/images/p16.jpg',
  ingredientsList:[],
  instructions:''}
]

console.log(midrinke)

const Drinks = () => {
    return (
          <div className="drinks-container">
            <h1 className="">Drinks</h1>
            {midrinke.map((data, key) => {
              return (
                <div key={key}>
                  <div className="drink">
                  <Card image={data.image} title={data.label} ingredientsList={data.ingredientsList} instructions={data.instructions}/>
                  </div>
                </div>
              );
            })}
          </div>
    );
};
  
export default Drinks;