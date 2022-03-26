//add to local storage
const setCartToLocalStorage = (cart) => {
    const localCart = localStorage.getItem('mealdb-cart');
    if(localCart && cart.length === 0){
        localStorage.setItem('mealdb-cart',localCart);
    }
    else{
        localStorage.setItem('mealdb-cart',JSON.stringify(cart))
    }
}

const getCartFromLocalStorage = () =>{
    const cart = localStorage.getItem('mealdb-cart')
    return JSON.parse(cart);
}

export {setCartToLocalStorage,getCartFromLocalStorage}