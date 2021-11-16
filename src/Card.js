import RecipeData from "./recipeDataFile"
import { Card, Button, CardGroup, Row } from 'react-bootstrap';
import WholeRecipe from "./WholeRecipe"
import { Link, useHistory } from "react-router-dom";

export const Cards = ({image, title, ingredientsList}) => {
    
    const handleClick = ({title}) => {
        console.log(title)
    }

    return (
            <div>
            <Card className="">
            <Card.Img src={image} onError={(event) => event.target.style.display = 'none'}/>
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Link to=
                    {{
                      pathname: "/wholerecipe",
                      state: { title: title, 
                               image: image,
                               ingredientsList: ingredientsList
                             }
                    }} > <Button variant="primary">Show Recipe</Button> 
                </Link>
                
            </Card.Body>
            </Card> 
            </div>
 
        );
}

export default Cards