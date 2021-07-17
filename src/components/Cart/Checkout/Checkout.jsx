import React from 'react';
import styles from './Checkout.module.css';
import useInput from '../../../hooks/useInput';
const isNameValid = value =>value.trim().length > 0;
const isAdressValid = value =>value.trim().length > 0;
const isEmailValid = value=> value.includes('@');

const Checkout = (props) =>{
    
    const {enteredValue:enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        BlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isNameValid);
    const {
        enteredValue:enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        BlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmailValid);
    const {
        enteredValue:enteredAdress,
        isValid: adressIsValid,
        hasError: adressHasError,
        valueChangeHandler: adressChangeHandler,
        BlurHandler: adressBlurHandler,
        reset: resetAdress
    } = useInput(isAdressValid);
    
    let isFormValid = nameIsValid && emailIsValid && adressIsValid;
    const submitFormHandler = (event) =>{
        event.preventDefault();
        props.onSuccess(true);
        props.onClearCart();
        props.onExitCheckout();
        resetName();
        resetEmail();
        resetAdress();
        
    }
    
        return(
        <React.Fragment>
            <form onSubmit={submitFormHandler} className={styles.form}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    type='text' 
                    id='name' 
                    onChange={nameChangeHandler} 
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    className={nameHasError ? 'control invalid': 'form-control'}
                />
                {nameHasError && <p className='error-text'>Please check your name input</p>}
            </div>
            <div className={styles.control}>
                <label htmlFor='email'>Your Email</label>
                <input 
                    type='text' 
                    id='email' 
                    onChange={emailChangeHandler} 
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    className={emailHasError ? 'form-control invalid': 'form-control'}
                />
                {emailHasError && <p className='error-text'>Please check your email input</p>}
            </div>
            <div className={styles.control}>
                <label htmlFor='adress'>Your Adress</label>
                <input 
                    type='text' 
                    id='adress' 
                    onChange={adressChangeHandler} 
                    onBlur={adressBlurHandler}
                    value={enteredAdress}
                    className={adressHasError ? 'form-control invalid': 'form-control'}
                />
                {adressHasError && <p className='error-text'>Please check your adress input</p>}
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart}>Cancel</button>
                <button disabled={!isFormValid}>Order</button>
            </div>        
        </form>
        
        </React.Fragment>
               
    )
}
export default Checkout;