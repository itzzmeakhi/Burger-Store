import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from './../Order/CheckoutSummary/CheckoutSummary.component';
import ContactData from './ContactData/ContactData.component';

class Checkout extends Component {
    state = {
        ingredients : null,
        totalPrice : 0
    }

    orderCancelledHandler = () => {
        this.props.history.goBack();
    }

    orderContinuedHandler = () => {
        this.props.history.push(this.props.match.path + '/contact-data');
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if(param[0] === 'price') {
                price = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        };

        this.setState({ingredients : ingredients, totalPrice : price});
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients} 
                    orderContinued = {this.orderContinuedHandler}
                    orderCancelled = {this.orderCancelledHandler}/>

                <Route path = {this.props.match.path + '/contact-data'} render = {(props) => (<ContactData ingredients = {this.state.ingredients} totalPrice = {this.state.totalPrice} {...props}></ContactData>)} />
            </div>
        )
    }
}

export default Checkout;