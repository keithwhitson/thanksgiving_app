import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Cards = ({image, title, ingredientsList, instructions}) => {

    const handleError = ({event, image}) => {
        event.target.style.display = 'none';
        //event.target.parentNode.style.display = 'none';
        //event.target.parentNode.style.visibility = 'hidden';
        //let elem = event.target.parentNode;
        //let par_elem = event.target.parentNode.parentNode;
        //par_elem.classList.add("remove-completely");
    }

    return (
            <div className="">
            <Card>
            <Card.Img src={image} onError={(event) => handleError({event, image})}/>
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Link to=
                    {{
                      pathname: "/thanksgiving_app/wholerecipe",
                      state: { title: title, 
                               image: image,
                               ingredientsList: ingredientsList,
                               instructions: instructions
                             }
                    }} > <Button className="" variant="danger" size="sm" type="button">Show Recipe</Button> 
                </Link>
            </Card.Body>
            </Card> 
            </div>
 
        );
}

export default Cards