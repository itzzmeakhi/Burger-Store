import React from 'react';

import './BuildControls.styles.css';

import BuildControl from './BuildControl/BuildControl.component'; 

const controls = [
    { label : "Meat", type : "meat" },
    { label : "Salad", type : "salad" },
    { label : "Cheese", type : "cheese" },
    { label : "Bacon", type : "bacon" }
];

const buildControls = ( props ) => (
    <div className = "BuildControls">
        <p> Current Price : <strong> {props.totalPrice.toFixed(2)} </strong> </p>
        { controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label} 
                added = {() => props.addIngredients(ctrl.type)} 
                remove = {() => props.removeIngredients(ctrl.type)} 
                disabled = {props.disabled[ctrl.type]} />
        ))}
        <button 
            type = "button" 
            className = "OrderButton" 
            onClick = {props.purchasing}
            disabled = {!props.purchasable}> 
            ORDER NOW 
        </button>
    </div>
);

export default buildControls;