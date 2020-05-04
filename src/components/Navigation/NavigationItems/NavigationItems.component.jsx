import React from 'react';

import './NavigationItems.styles.css';

import NavigationItem from './NavigationItem/NavigationItem.component';

const navigationItems = ( props ) => (
    <ul className = "NavigationItems">
        <NavigationItem link = "/" active>Burger Builder</NavigationItem>
        <NavigationItem link = "/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;