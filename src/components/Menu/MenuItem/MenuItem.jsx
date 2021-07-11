import React,{useContext} from 'react';
import styles from './MenuItem.module.css';
import MenuItemForm from './MenuItemForm'
import CartContext from '../../../store/cart-context';

const MenuItem = props =>{
    const cartCtxt = useContext(CartContext);
    
    const addToCartHandler = (enteredAmount) =>{
        cartCtxt.addItem({
            id:props.id,
            name: props.title,
            amount:enteredAmount,
            price:props.price
        })
    }
    return(
        <div className={styles.meal}>
            <div className={styles.mealInfo}>
                <h2>{props.title}</h2>
                <p className={styles.description}>{props.productDescription}</p>
                <p className={styles.price}>{`$${props.price.toFixed(2)}`}</p>
            </div>
            <MenuItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
        
    )
}
export default MenuItem;