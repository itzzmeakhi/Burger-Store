import React from 'react';

import './Logo.styles.css';

import burgerLogo from './../../assets/images/burger-logo.png.png';

const logo = ( props ) => (
    <div className = "Logo">
        <img src = {burgerLogo} alt = "Burger Store Logo" />
    </div>
);

export default logo;