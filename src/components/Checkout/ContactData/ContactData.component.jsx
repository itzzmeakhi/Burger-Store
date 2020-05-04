import React, { Component } from 'react';

import Button from './../../Button/Button.component';
import axiosInstance from './../../../axios-orders.component';
import Spinner from './../../Spinner/Spinner.component';
import Input from './../../Input/Input.component';

import './ContactData.styles.css'

class ContactData extends Component {

    state = {

        orderForm : {
            name : {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Your Name"
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false
            },
            email : {
                elementType : "input",
                elementConfig : {
                    type : "email",
                    placeholder : "Your Email"
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false
            },
            street : {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Street"
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false
            },
            country : {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Country"
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false
            },
            zipcode : {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "zipcode"
                },
                value : '',
                validation : {
                    required : true,
                    minLength : 5
                },
                valid : false
            },
            deliveryType : {
                elementType : "select",
                elementConfig : {
                    options : [
                        { value : 'fastest', displayValue : 'Fastest' },
                        { value : 'cheapest', displayValue : 'Cheapest' }
                    ]
                },
                value : '',
                validation : {},
                valid : true
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // alert("Order continued!");
        this.setState({
            isLoading: true
        });
        
        let customerDetails = {};
        for(let inputElement in this.state.orderForm) {
            customerDetails[inputElement] = this.state.orderForm[inputElement].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customerDetails : customerDetails,
            deliveryType: "fastest"
        }

        axiosInstance.post('/orders.json', order)
            .then(response => {
                this.setState({isLoading: false});
                console.log(response);
                this.props.history.push('/');
            })
    }


    inputChangeHandler = (event, inputElement) => {
        let updatedForm = {
            ...this.state.orderForm
        };
        let updatedFormElement = {
            ...this.state.orderForm[inputElement]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.validation, updatedFormElement.value);
        updatedForm[inputElement] = updatedFormElement;
        this.setState({orderForm : updatedForm});
    }

    checkValidity = (rules, value) => {

        let isValid = true;

        if(!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() === '' && isValid
        }

        return isValid;
    }

    render(){

        let formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id : key,
                config : this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit = {this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        key = {formElement.id}
                        value = {formElement.config.value} 
                        invalid = {formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        changed = {(event) => {this.inputChangeHandler(event, formElement.id)}}/>
                ))}
                <Button btnType = "Success">ORDER</Button>
            </form>
        );

        if(this.state.loading) {
            form = (<Spinner></Spinner>);
        }
        return(
            <div className = "ContactData">
                <h1> Enter Contact Details </h1>
                {form}
            </div>
        )
    }

}

export default ContactData;