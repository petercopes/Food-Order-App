import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount: 0
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
       /*  let alreadyExists = false;
        for(let item of state.items){
            if (item.name === action.value.name){
                console.log(item)
                console.log(action.value.amount)
                console.log(item.amount)
                item.amount+=action.value.amount;
                alreadyExists=true;
                console.log(item)
                console.log(item.amount)
            }
        } */
        const existingCartItemIndex = state.items.findIndex(item=>item.id===action.value.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount+action.value.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]= updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.value)
        }
        const updatedAmount = state.totalAmount+ (action.value.price*action.value.amount);
        return {
            items: updatedItems,
            totalAmount:updatedAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item=>item.id===action.value);
        
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedAmount = state.totalAmount- existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount=== 1){

            updatedItems = state.items.filter(item=> item.id !== action.value);
        }
        else{

                 const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount-1
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex]= updatedItem;
            }
           
    
        
        return {
            items: updatedItems,
            totalAmount:updatedAmount
        }
    }
    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);
    const addItemHandler = item =>{
        dispatchCart({
            type:'ADD',
            value: item
        })
    }
    const removeItemHandler = id =>{
        dispatchCart({
            type:'REMOVE',
            value: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;