import React from 'react';
import styles from './App.module.css';

import Menu from './components/Menu/Menu.jsx'

import Header from './components/Layout/Header/Header.jsx';
import Cart from './components/Cart/Cart'

function App() {
  const cart = [];
  const onCart = false;
  return (
    <div className={styles.app}>
      <Cart/>
      <Header/>
      <Menu></Menu>
    </div>
  );
}

export default App;
