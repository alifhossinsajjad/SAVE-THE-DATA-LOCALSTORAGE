import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            {
                cart.map(bottle =>
                 <div key={bottle.id} style= {{display:'grid',gridTemplateColumns:'repeat(2, 1fr)', margin:'5px',}}>
                    <h4>{bottle.brand}</h4>
                    <button onClick={() => {handleRemoveFromCart(bottle.id)}}>Cut</button>
                </div>)
            }
        </div>
    );
};

export default Cart;