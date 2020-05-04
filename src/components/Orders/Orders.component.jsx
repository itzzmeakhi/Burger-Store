import React, { Component } from 'react';

import axiosInstance from './../../axios-orders.component';
import Order from './../Order/Order.component';

class Orders extends Component{

    state = {
        orders: null,
        loading: true
    }

    componentDidMount() {
        axiosInstance.get('/orders.json')
            .then(res => {
                console.log(res.data);
                const fetchedOrders = [];
                for(let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id : key
                    });
                }
                this.setState({orders: fetchedOrders, loading: false});
            })
    }
    render() {

        return(
            <div>

                {this.state.orders ? 
                    this.state.orders.map(order => (
                        <Order key = {order.id} ingredients = {order.ingredients} price = {+order.price} />
                    ))
                    : null
                }



            </div>
        )
    }
}

export default Orders;