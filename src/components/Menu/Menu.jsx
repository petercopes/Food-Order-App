import React from 'react';
import MealsSummary from './MealsSummary/MealsSummary';
import MenuList from './MenuList/MenuList';

const Menu = props =>{

    return(
        <React.Fragment>
            <MealsSummary/>
            <MenuList/>
        </React.Fragment>
    )
}
export default Menu;