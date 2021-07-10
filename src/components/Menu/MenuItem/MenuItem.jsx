import React from 'react';
import styles from './MenuItem.module.css';
import Button from '../../UI/Button/Button';
import MenuItemForm from './MenuItemForm'

const MenuItem = props =>{
    return(
        <div className={styles.meal}>
            <div className={styles.mealInfo}>
                <h2>{props.title}</h2>
                <p className={styles.description}>{props.productDescription}</p>
                <p className={styles.price}>{`$${props.price.toFixed(2)}`}</p>
            </div>
            <MenuItemForm id={props.id}/>
        </div>
        
    )
}
export default MenuItem;