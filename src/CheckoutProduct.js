import React, { forwardRef } from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { store } from 'react-notifications-component';

/**
 * ref is needed for react-flip-move to work. Becase of this we have created
 * this functional component in React.forwardRef since fucttional components dont
 * have acces to ref
 */

const CheckoutProduct = forwardRef(({ id, image, title, price, rating, hideButton }, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    // Method to remove an item from the basket
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            id
        })

        store.addNotification({
            title: "Info!",
            message: `${title} has successfully been removed from basket!`,
            type: "default",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              showIcon: true,
              pauseOnHover: true
            }
          })

    }
    return (
        <div ref={ref} key={id} className='checkoutProduct'>
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
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}

            </div>
        </div>
    )
})

export default CheckoutProduct
