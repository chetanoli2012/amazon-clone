import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    console.log('basket', basket)
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
    }

    return (
        <div className='product'>

            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <stron>{price}</stron>
                </p>

                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=''></img>

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
