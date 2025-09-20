import React from 'react';

const Bottle = ({bottle,handleAddToCart}) => {
    
   

    return (
        <div>
            <h2>Bottle Brand : {bottle.brand}</h2>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;

