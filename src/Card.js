import RecipeData from "./recipeDataFile"
import { Card, Button, CardGroup, Row } from 'react-bootstrap';
import WholeRecipe from "./WholeRecipe"

const ErrorPic = (props) => {
    console.log(props)
}

export const Cards = ({image, title}) => {
    return (
            <Card style={{ width: '20rem', height: '35rem',float: 'left' }} className="ml-auto">
            <Card.Img variant="top" src={image} onError={(event) => event.target.style.display = 'none'}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button onClick={(props) => WholeRecipe(props)} variant="primary">Show Recipe</Button>
            </Card.Body>
            </Card>
               
        );
}

export default Cards