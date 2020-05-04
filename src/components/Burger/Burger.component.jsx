import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';
import './Burger.styles.css';


const burger = ( props ) => {

    let ingredients = Object.keys(props.ingredients).map(ingredientKey => { 
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key = {ingredientKey + index} type = {ingredientKey} />
        });
    }).flat(1);

    // console.log(igs.length);
    // console.log(ingredients);

    if(ingredients.length === 0) {
        ingredients = "Start adding ingredients.";
    }

    return(
        <div className = "Burger">
            <BurgerIngredient type = "bread-top" />
            {ingredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
}

export default burger;