import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({ image, price, id, title, rating}) => {
  return (
    <div className="checkoutProduct">
        <div className="checkouProduct__info">
            <img src={image} alt="checkoutProduct__image" className='checkoutProduct__image' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => <p>⭐</p> )}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
