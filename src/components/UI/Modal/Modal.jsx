import React, {Fragment} from 'react'
import ReactDom from 'react-dom';
import styles from './Modal.module.css';
import Card from '../Card/Card'
import Button from '../Button/Button'

const Backdrop = props =>{
    return(
        <div className={styles.backdrop} onClick ={props.onConfirm}/>
    )
}
const ModalOverlay = props =>{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = props =>{

    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdropRoot')) }
            {ReactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlayRoot')) }
            
           
        </Fragment>
        

    )
}

export default Modal;