
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, storedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const {products,initialCart} = useLoaderData();
    const[cart,setCart] = useState(initialCart)
 

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

   } ,[products])
    
    const addToCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div>
            
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key ={product.id}
                        product ={product}
                        addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
            
        </div>
    );
};

export default Shop;