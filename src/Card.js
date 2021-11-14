import RecipeData from "./recipeDataFile"
import { Card, Button, CardGroup, Row } from 'react-bootstrap';
import WholeRecipe from "./WholeRecipe"
import { Link, useHistory } from "react-router-dom";

export const Cards = ({image, title, ingredientsList}) => {
    
    const handleClick = ({title}) => {
        console.log(title)
    }

    return (
            <Card style={{ width: '20rem', height: '35rem',float: 'left' }} className="ml-auto">
            <Card.Img variant="top" src={image} onError={(event) => event.target.style.display = 'none'}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button type="button" onClick={() => handleClick({title})} variant="primary">Show Recipe</Button>
            </Card.Body>
            </Card>  
        );
}

export default Cards