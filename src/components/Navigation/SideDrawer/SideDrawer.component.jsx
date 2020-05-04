import React from 'react';

import './SideDrawer.styles.css';

import NavigationItems from './../NavigationItems/NavigationItems.component';

const sideDrawer = ( props ) => {
    return(
        <div className = "SideDrawer">
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;