import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";


const WholeRecipe = () => {
    let location = useLocation();
    let state = location.state;
    let title = state.title;
    return(
        <div>
        <h1 className="text-center"> Recipe </h1>
        <h2>{title}</h2>
        </div>
    );
};

export default WholeRecipe;