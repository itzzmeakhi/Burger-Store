import React from 'react';

import './Input.styles.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = ["InputElement"];

    if(props.shouldValidate && props.invalid) {
        inputClasses.push("Invalid");
    }

    switch( props.elementType ) {
        case('input'):
            inputElement = <input 
                className = {inputClasses.join(' ')}
                onChange = {props.changed}
                {...props.elementConfig} 
                value = {props.value} />;
            break;
        case('textarea'):
            inputElement = <textarea 
                                className = {inputClasses.join(' ')}
                                {...props.elementConfig} 
                                value = {props.value}
                                onChange = {props.changed}>
                            </textarea>;
            break; 
        case('select'):
            inputElement = (
                <select className = {inputClasses.join(' ')} value = {props.value} onChange = {props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option value = {option.value} key = {option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className = {inputClasses.join(' ')} {...props.elementConfig} value = {props.value} />;
            break;
    }

    return(
        <div className = "Input">
            <label className = "Label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;