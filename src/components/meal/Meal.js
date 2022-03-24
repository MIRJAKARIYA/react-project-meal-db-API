import React from 'react';
import './Meal.css'
const Meal = ({meal}) => {
    const {strMealThumb, strMeal, strInstructions} = meal;
    return (
        <div className='meal'>
            <div className='img-container'>
                <img className='meal-img' src={strMealThumb} alt="" />
            </div>
            <div>
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0,100)}</p>
            </div>
            <button className='add-to-cart-button'>Add to cart</button>
        </div>
    );
};

export default Meal;