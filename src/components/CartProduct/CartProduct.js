import React from 'react';
import './CartProduct.css'
const CartProduct = ({meal}) => {
    const {mealImg, quantity,name} = meal;
    return (
        <div className='cart-single-product'>
            <div className='meal-img-name-container'>
                <img className='cart-single-product-img' src={mealImg} alt="" />
                <p className='meal-name'>{name}</p>
            </div>
            <p>{quantity}</p>
        </div>
    );
};

export default CartProduct;