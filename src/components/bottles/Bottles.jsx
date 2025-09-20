import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import { addItemToLocalStorage, getCartFromLocalStorage, removeItemFromLocalStorage} from '../../utilites/LocalStorage';
import Cart from '../cart/Cart';

const Bottles = ({ bottlesPromise }) => {
     const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);




    useEffect(() => {
        const storedCartIds = getCartFromLocalStorage();

        const storedCart = []; 

        for(const id of storedCartIds){
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);
    },[bottles]);


    const handleRemoveFromCart = (id) => {
        console.log('i am',id);
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining);
        // remove from local storage
        removeItemFromLocalStorage(id);
    }
   
    const handleAddToCart = (bottle) => {
       
        const newCart = [...cart, bottle];
        setCart(newCart);

        addItemToLocalStorage(bottle.id);
    }

    console.log(bottles);
    return (
        <div>
            <h2>Bolttes : {bottles.length}</h2>
            <h3>Cart Items : {cart.length}</h3>

            <Cart  cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>


            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}  handleAddToCart={handleAddToCart}/>)
                }
            </div>
        </div>
    );
};

export default Bottles;