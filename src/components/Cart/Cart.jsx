import React,{useContext, useState} from 'react';
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout/Checkout';


const Cart = props =>{
    const [onCheckout,setOnCheckout] = useState(false);
    const [onSuccesOrder,setOnSuccesOrder] = useState(false);
    const cartCtxt = useContext(CartContext);
    const hasItems = cartCtxt.items.length>0;
    const cartItemAddHandler =(item) =>{
        cartCtxt.addItem({...item,amount:1});
    }
    const cartItemRemoveHandler = (id) =>{
        cartCtxt.removeItem(id)
    }
    const clearCartHanlder = ()=>{
        cartCtxt.clearCart();
    }
    const cartItems = (
    <ul className={styles['cart-items']}>
        {
            cartCtxt.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    id={item.id} 
                    amount={item.amount} 
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                />
            )
            )
        }
    </ul>
    );
    const checkoutHandler = () =>{
        setOnCheckout(true);
    }
    const closeCartHandler = () =>{
        props.onHideCart();
        setOnCheckout(false);
    }
    const onSuccesContent = (
        <Modal onClick={props.onHideCart}>
            <p>Orden enviada exitosamente</p>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}onClick={closeCartHandler}>Close</button>
            </div>
        </Modal>
        
    )
    const defaultContent = (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    ${cartCtxt.totalAmount.toFixed(2)}
                </span>
            </div >
            {onCheckout && <Checkout onHideCart={closeCartHandler} onClearCart={clearCartHanlder} cartInfo={cartCtxt.items} onExitCheckout={setOnCheckout} onSuccess={setOnSuccesOrder}/>}
            {!onCheckout &&
                <div className={styles.actions}>
                    <button className={styles["button--alt"]}onClick={closeCartHandler}>Close</button>
                    {hasItems && <button className={styles.button} onClick={checkoutHandler}>Buy</button>}
            </div>
            }
        </Modal>
    )
    const content = onSuccesOrder? onSuccesContent : defaultContent;

    return content;

}
export default Cart;