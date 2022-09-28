

import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,ratings,price,seller} = props.product;
   const {addToCart,product} = props
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p>{seller}</p>
                <p>Ratings: ${ratings}</p>
           </div>
           <button onClick={()=>addToCart (product)} className='btn-cart'>
            <p className='btn-text'>Add To Card</p>
           </button>
        </div>
    );
};

export default Product;