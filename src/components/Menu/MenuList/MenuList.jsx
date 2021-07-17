import React,{useEffect, useState} from 'react';
import styles from './MenuList.module.css';
import Card from './../../UI/Card/Card';
import MenuItem from '../MenuItem/MenuItem';

const MenuList = props => {
    const [items,setItems]= useState([]);
    
    useEffect(() => {
        const getMeals = async () =>{
            try {
                const res = await fetch('https://60f32ca46d44f300177888ec.mockapi.io/meals');
                if(!res.ok){
                    throw new Error(`ErrorCode: ${res.status}`);
                }
                const meals = await res.json();
                setItems(meals);

            } catch (error) {
                console.log(error);
            }
        }
        getMeals();
    }, []);

    const menuItems = items.map(element=>
        <MenuItem
            key ={element.id} 
            id={element.id}
            title={element.name}
            productDescription={element.description}
            price={element.price}
            /* onAddCart={} */
        />)
    
    return(
        <section className={styles.meals}>
            <Card >
                <ul>{menuItems}</ul>                
            </Card>
        </section>
        
    )
}

export default MenuList;