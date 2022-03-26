import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../meal/Meal';
import { getCartFromLocalStorage, setCartToLocalStorage } from '../utilities/localStorageHandle';
import './Shop.css';
const Shop = ({searchText}) => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
        .then(res => res.json())
        .then(data =>setMeals(data.meals))
    },[searchText]);


    useEffect( ()=>{
        
        setCartToLocalStorage(cart)
    },[cart]);
    useEffect( ()=> {
        const localCart = getCartFromLocalStorage();
        setCart(localCart)
    },[])

    const addToCart = (id) =>{
        const addMealToCart = meals.find(meal => meal.idMeal === id);
        const isExists = cart.find(meal => meal.id === id);
        if(isExists){
            isExists.quantity = isExists.quantity + 1;
            const restCartMeals = cart.filter(meal => meal.id !== isExists.id);
            restCartMeals.push(isExists);
            setCart(restCartMeals);
        }
        else{
            const newCart = {
                id: addMealToCart.idMeal,
                mealImg: addMealToCart.strMealThumb,
                price: Number(addMealToCart.idMeal),
                quantity: 1,
                name: addMealToCart.strMeal
            }
            setCart([...cart,newCart]);
        }
    }
    return (
        <main className='shop-container'>
            <div className='product-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} addToCart={addToCart} meal={meal}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </main>
    );
};

export default Shop;