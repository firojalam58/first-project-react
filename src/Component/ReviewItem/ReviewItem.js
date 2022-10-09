import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product, handleRemoveItems}) => {
    const {id,img,name,price,quantity,shipping} = product
    return (
        <div className='rivew-item'>
            <div className="image">
            <img src={img} alt="" />
            </div>
            <div className="reviwDetailsContainer">
            <div className="review-details">    
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Shipping: {shipping}</p>
            
            </div>
            <div className="review-delete">
                <button onClick={()=> handleRemoveItems(id)} className='review-delete-button'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
            </div>
            
            
        </div>
    );
};

export default ReviewItem;