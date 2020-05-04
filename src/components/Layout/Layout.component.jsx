import React from 'react';

import Aux from '../hoc/Auxiliary.component';
import Toolbar from './../Navigation/Toolbar/Toolbar.component';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer.component';

import './Layout.styles.css';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className = "Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;