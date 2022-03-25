import React from 'react';
import './Meal.css'
const Meal = ({meal,addToCart}) => {
    const {strMealThumb, strMeal, strInstructions, idMeal} = meal;
    return (
        <div className='meal'>
            <div className='img-container'>
                <img className='meal-img' src={strMealThumb} alt="" />
            </div>
            <div>
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0,100)}</p>
            </div>
            <button onClick={()=> addToCart(idMeal)} className='add-to-cart-button'>Add to cart <span></span></button>
        </div>
    );
};

export default Meal;