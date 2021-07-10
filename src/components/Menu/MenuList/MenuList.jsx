import React from 'react';
import styles from './MenuList.module.css';
import Card from './../../UI/Card/Card';
import MenuItem from '../MenuItem/MenuItem';
import {DUMMY_MEALS} from '../../../dummyMeals.js'
const MenuList = props => {
    const menuItems = DUMMY_MEALS.map(element=>
        <MenuItem
            key ={element.id} 
            title={element.productName}
            productDescription={element.description}
            price={element.price}
            /* onAddCart={} */
        />)
    return(
        <Card className={styles.menuList}>
            {menuItems}
        </Card>
    )
}

export default MenuList;