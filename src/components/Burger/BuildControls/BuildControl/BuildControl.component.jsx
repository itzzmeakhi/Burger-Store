import React from 'react';

import './BuildControl.styles.css';

const buildControl = ( props ) => (
    <div className = "BuildControl">
        <div className = "Label">{ props.label }</div>
        <button type = "button" className = "Less" onClick = {props.remove} disabled = {props.disabled}>Less</button>
        <button type = "button" className = "More" onClick = {props.added}>More</button>
    </div>
);

export default buildControl;