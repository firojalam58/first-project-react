import React from 'react';

const Cart = (props) => {
        const {cart} = props
        let total = 0;
        let shipping = 0;
        let quantity = 0;
        for(const product of cart){
            quantity = quantity + product.quantity
            total = total + product.price * product.quantity;
            shipping = shipping  + product.shipping;
            
        }
        const tax = parseFloat((total *0.1).toFixed(2));
        const grand = parseFloat((total + shipping + tax).toFixed(2));
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Total Tax: ${tax}</p>
            <p>Total Grand: ${grand}</p>
        </div>
    );
};

export default Cart;