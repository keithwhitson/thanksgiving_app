import React from 'react';
import { useLocation } from "react-router-dom";

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
    const { title, ingredientsList } = location.state;
    return(
        <>
        <h1 className="text-center"> Recipe </h1>
        <div >
        <h2>{title}</h2>
        <h4>Ingredients List</h4>
        <div className="ingredients-lines">
        
        <Ingredients ingredientslist={ingredientsList}/>
        </div>
        

        </div>
        </>
    );
};

export default WholeRecipe;