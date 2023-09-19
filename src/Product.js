import React from 'react';
import "./Product.css";

function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'> 
                <small>£</small>
                <strong>{price}</strong>
                {/* inline styling here */}
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map(() => (
                    <p>⭐️</p>
                ))}
                {/* an array with length of ratings (eg 3), that I want to fill with something, that something is */}
                {/* map - for each item at the index in array, replace with the star (this is the function that is applied) */}
                {/* dont think i need (_, i) */}
            </div>
        </div>
        <img src={image} alt=''/>
        <button>Add to basket</button>
    </div>
  )
}

export default Product