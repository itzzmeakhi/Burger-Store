import React from 'react';

import Aux from '../hoc/Auxiliary.component';
import Button from './../Button/Button.component';

const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return <li key = {ingredientKey}>
                <span style = {{textTransform : 'capitalize'}}>{ingredientKey} : </span>
                {props.ingredients[ingredientKey]}
            </li>
        })

    return(
        <Aux>
            <h3> Your Order: </h3>
            <p> A Delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout? </p>
            <Button btnType = "Danger" clicked = {props.cancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.continued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;