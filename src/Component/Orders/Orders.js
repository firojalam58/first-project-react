import React, { useState,useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { removeFromDb, storedCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart} = useLoaderData();
    const[cart,setCart] = useState(initialCart);
    
    useEffect(()=>{
        const getStoreCard = storedCart();
        const savedCart = []
        for(const id in getStoreCard){
            const addedStoredCart = products.find(product => product.id === id)
            if(addedStoredCart){
                const quantity = getStoreCard[id];
                addedStoredCart.quantity = quantity;
                savedCart.push(addedStoredCart)
            }
        }
        setCart(savedCart)
    
       } ,[products]);
       const handleRemoveItems = (id)=>{
        const remaining = cart.filter(product => product.id !==id);
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                         product={product}
                         handleRemoveItems={handleRemoveItems}
                         >
                           
                        </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;