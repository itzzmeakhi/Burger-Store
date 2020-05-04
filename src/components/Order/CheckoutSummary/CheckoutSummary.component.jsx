import React from 'react';

import Burger from './../../Burger/Burger.component';
import Button from './../../Button/Button.component';

import './CheckoutSummary.styles.css';

const checkoutSummary = (props) => {
    return(
        <div className = "CheckoutSummary">
            <h1> We hope it tastes good! </h1>
            <div style = {{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients = {props.ingredients} />
            </div>
            <Button
                btnType = "Danger"
                clicked = {props.orderCancelled}>
                CANCEL
            </Button>
            <Button
                btnType = "Success"
                clicked = {props.orderContinued}>
                CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;