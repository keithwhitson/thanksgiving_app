import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";


const WholeRecipe = () => {
    const location = useLocation()
    const { instructions, title } = location.state;
    return(
        <div>
        <h1 className="text-center"> Recipe </h1>
        <h2>{title}</h2>
        <p>{instructions}</p>
        </div>
    );
};

export default WholeRecipe;