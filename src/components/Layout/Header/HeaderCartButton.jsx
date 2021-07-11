import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartICon/CartIcon';
const HeaderCartButton = props =>{

    const cartCtxt = useContext(CartContext);
    const numberOfProducts = cartCtxt.items.reduce((currNum,item)=>{
        return currNum+item.amount;
    },0)
    return(
        
        <button className={styles.button}onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span >
                Your Cart
            </span>
            <span className={styles.badge}>
                {numberOfProducts}
            </span>
        </button>
    )
}
export default HeaderCartButton;