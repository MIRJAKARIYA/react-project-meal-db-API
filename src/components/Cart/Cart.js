import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css'
const Cart = ({cart}) => {
    let quantity = 0;
    let totalPrice = 0;
    for(const meal of cart){
        quantity = quantity + meal.quantity;
        totalPrice = totalPrice + meal.price*meal.quantity;
    }
    totalPrice = Number(totalPrice.toFixed(2))
    const tax = Number((totalPrice * 0.15).toFixed(2));
    const grandTotal = totalPrice + tax;
    return (
        <div className='cart'>
            <h2>Shopping cart</h2>
            <div className='added-products'>
                {
                    cart.map(meal => <CartProduct key={meal.id} meal={meal}></CartProduct>)
                }
            </div>
            <div style={{marginTop: '10px'}}>
                <p>product count: {quantity}</p>
                <p>total price: {totalPrice}</p>
                <p>Tax: {tax}</p>
                <p>Grand total: {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;