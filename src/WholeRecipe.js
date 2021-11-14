import React from 'react';
import { useHistory } from "react-router-dom";

const WholeRecipe = ({title}) => {
    console.log(title)
    let history = useHistory();
    return(
        <>
        <h1> Recipe </h1>
        <h2>{title}</h2>
        </>
    );
};

export default WholeRecipe;