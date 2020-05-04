import React from 'react';

import './Toolbar.styles.css';

import Logo from './../../Logo/Logo.component';
import NavigationItems from './../NavigationItems/NavigationItems.component';

const toolbar = () => (
    <header className = "Toolbar">
        <div> MENU </div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;