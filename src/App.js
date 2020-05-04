import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder.component';
import Checkout from './components/Checkout/Checkout.component';
import Orders from './components/Orders/Orders.component';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <Route path = "/checkout" component = {Checkout} />
          <Route path = "/orders" component = {Orders} />
          <Route path = "/" exact component = {BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
