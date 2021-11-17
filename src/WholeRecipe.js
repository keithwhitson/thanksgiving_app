import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

const Ingredients = ({ingredientslist}) => {
    
    return (
        
        ingredientslist.map((data,key) => {
            return(
            <div id="ingredients-list">
            <p>{data}</p>
            </div>)
        })
    );
}

const WholeRecipe = () => {
    const location = useLocation()
    const { title, ingredientsList } = location.state;
    return(
        <div>
        <h1 className="text-center"> Recipe </h1>
        <h2>{title}</h2>
        <h4>Ingredients List</h4>
        <Ingredients ingredientslist={ingredientsList}/>
        </div>
    );
};

export default WholeRecipe;