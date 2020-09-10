import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    // Method to remove an item from the basket
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            id
        })

    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="Checkout Product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
