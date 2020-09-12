import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { store } from 'react-notifications-component';


function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log('basket', basket)
    const addToBasket = () => {
        // dispatch ADD_TO_BASKET action with item
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })

        store.addNotification({
            title: "Success!",
            message: `${title} has successfully been added to your basket!`,
            type: "success",
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
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key = {i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=''></img>

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
