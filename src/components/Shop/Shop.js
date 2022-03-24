import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../meal/Meal';
import './Shop.css';
const Shop = ({searchText}) => {
    console.log(searchText)
    const [meals, setMeals] = useState([])
    useEffect( () =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
        .then(res => res.json())
        .then(data =>setMeals(data.meals))
    },[searchText])
    return (
        <main className='shop-container'>
            <div className='product-container'>
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </main>
    );
};

export default Shop;