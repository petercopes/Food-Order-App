import React, {useState} from 'react';
import styles from './App.module.css';

import Menu from './components/Menu/Menu.jsx'

import Header from './components/Layout/Header/Header.jsx';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';

function App() {
  const cart = [{
    }]
  const [cartVisible,setCartVisible] = useState(false);
  const showCartHandler = ()=>{
    setCartVisible(true);
  } 
  const hideCartHandler = ()=>{
    setCartVisible(false);
  }
  return (
    <CartProvider className={styles.app}>
      {cartVisible && <Cart onHideCart={hideCartHandler} cart={cart}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
      <Menu></Menu>
    </CartProvider>
  );
}

export default App;
