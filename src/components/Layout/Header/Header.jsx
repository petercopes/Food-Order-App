import React from 'react';
import styles from './Header.module.css'
import mealsImg from '../../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';
const Header = props =>{
    return(
        <React.Fragment>
            <header 
                className={styles.header}
            >
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt='a delicious plate of food'/>
            </div>
        </React.Fragment>
        
    )
}

export default Header;