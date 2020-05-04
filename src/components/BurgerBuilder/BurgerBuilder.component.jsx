import React, { Component } from 'react';

import Aux from '../hoc/Auxiliary.component';
import Burger from '../Burger/Burger.component';
import BuildControls from '../Burger/BuildControls/BuildControls.component';
import Modal from './../Modal/Modal.component';
import OrderSummary from './../OrderSummary/OrderSummary.component';
import Spinner from './../Spinner/Spinner.component';

//import axiosInstance from './../../axios-orders.component';
// import WithErrorHandler from './../hoc/withErrorHandler/withErrorHandler.component';


const INGREDIENTS_PRICE = {
    meat: 1.7,
    cheese: 0.4,
    salad: 0.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
        isLoading : false
    }

    addIngredientHandler = (type) => {
       const oldIngredientCount = this.state.ingredients[type];
       const updatedIngredientCount = oldIngredientCount + 1;
       const updatedIngredients = {
           ...this.state.ingredients
       };
       updatedIngredients[type] = updatedIngredientCount;
       const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
       this.setState({
           ingredients: updatedIngredients,
           totalPrice: updatedPrice
       });
       this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if(oldIngredientCount <= 0) {
            return;
        }
        const updatedIngredientCount = oldIngredientCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientCount;
        const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchasable(updatedIngredients);
    }

    updatePurchasable = (updatedIngredients) => {
        const ingredients = updatedIngredients;
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return updatedIngredients[ingredientKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        
        this.setState({
            purchasable: sum > 0
        });
    }

    purchasingHandler = () => {
        this.setState({
            purchasing : true
        });
    }

    purchasingCanceHandler = () => {
        this.setState({
            purchasing : false
        });
    }

    purchasingContinuedHandler = () => {
        const queryParams = [];
        for(let ing in this.state.ingredients) {
            queryParams.push(encodeURIComponent(ing) + "=" + encodeURIComponent(this.state.ingredients[ing]));
        };
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname : '/checkout',
            search: '?' + queryString 
        });
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        let orderSummary = (
            <OrderSummary 
                ingredients = {this.state.ingredients}
                cancelled = {this.purchasingCanceHandler}
                continued = {this.purchasingContinuedHandler}
                price = {this.state.totalPrice}>
            </OrderSummary>
        );

        if(this.state.isLoading) {
            orderSummary = (
                <Spinner></Spinner>
            );
        }

        return(
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchasingCanceHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls 
                    addIngredients = {this.addIngredientHandler}
                    removeIngredients = {this.removeIngredientHandler} 
                    totalPrice = {this.state.totalPrice} 
                    disabled = {disabledInfo} 
                    purchasable = {this.state.purchasable} 
                    purchasing = {this.purchasingHandler} />
            </Aux>
        );
    }
}

// export default WithErrorHandler(BurgerBuilder, axiosInstance);

export default BurgerBuilder;