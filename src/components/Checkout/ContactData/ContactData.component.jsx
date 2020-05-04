import React, { Component } from 'react';

import Button from './../../Button/Button.component';
import axiosInstance from './../../../axios-orders.component';
import Spinner from './../../Spinner/Spinner.component';

import './ContactData.styles.css'

class ContactData extends Component {

    state = {
        name : '',
        email : '',
        address : {
            street : '',
            postal : ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // alert("Order continued!");
        this.setState({
            isLoading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name : "Akhil",
                address: {
                    street: "Main Road",
                    city: "Tossipudi"
                }
            },
            deliveryType: "fastest"
        }

        axiosInstance.post('/orders.json', order)
            .then(response => {
                this.setState({isLoading: false});
                console.log(response);
                this.props.history.push('/');
            })
    }

    render(){
        let form = (
            <form>
                <input type = "text" className = "Input" placeholder = "Enter Name" />
                <input type = "text" className = "Input" placeholder = "Enter email" />
                <input type = "text" className = "Input" placeholder = "Enter Street" />
                <input type = "text" className = "Input" placeholder = "Enter Postal Code" />
                <Button btnType = "Success" clicked = {this.orderHandler}>ORDER</Button>
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