const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) :  [];
}



const addItemToLocalStorage = (id) => {
    console.log(id);
    const cart = getCartFromLocalStorage();
    console.log(cart);
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeItemFromLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    const remaining = cart.filter(itemId => itemId !== id);
    localStorage.setItem('cart', JSON.stringify(remaining));
}


export {addItemToLocalStorage, getCartFromLocalStorage, removeItemFromLocalStorage};