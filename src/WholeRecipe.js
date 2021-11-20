import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, CardHeader } from '@mui/material';

const Ingredients = ({ingredientslist}) => {
    return (
        ingredientslist.map((data,key) => {
            return(
            <p>{data}</p>
            )
        })
    );
}

const WholeRecipe = () => {
    const location = useLocation()
    const { title, ingredientsList, image } = location.state;
    return(
            <div className="ingredients-lines">
                <Card style={{width: '80%', backgroundColor: "#FDF9D8", margin: 'auto', padding: '25px'}}>
                    <CardHeader title={title} subheader="Recipe Ingredients" />
                    <CardMedia component="img" height="300rem" image={image} alt="dish instructions" />
                    <CardContent>
                        <Ingredients ingredientslist={ingredientsList}/>
                    </CardContent>
                </Card>
            </div>
    );
};

export default WholeRecipe;


