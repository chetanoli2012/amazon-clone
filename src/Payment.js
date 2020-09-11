import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, actionTypes } from './reducer';
import axios from './axios';
import { db } from './firebase';


function Payment() {

    /**
     * Getthe the state (destructured) and dispatch from useStateValue() hook
     */
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    /**
     * Getting hooks from react-stripe-js
     */
    const stripe = useStripe();
    const elements = useElements();

    /**
     * using state value for capturing errors and for disabling the payment button
     * Two more added later to track succeeded and processing
     * And one more for client secret
     */

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    /**
     * Runs only once when the component load since [] is passed as second param
     * Else it runs on the change of array of values passed in the []
     */

    useEffect(() => {
        // genrate the client secret for stripe which allows us to charge a customer
        // but whenever the basket changes we need to get a new secret to reflect
        // new price

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe exptcts the total in currencies subunits (cents for USD)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response?.data?.clientSecret)
        };

        getClientSecret();
    }, [basket])

    console.log('CLIENT SECRET is ', clientSecret);

    /**
     * Method to handle the payment sumbmit
     * takes an event because its a form
     */
    const handleSubmit = async (event) => {
        //hand the stripe stuff here
        event.preventDefault();
        setProcessing(true);

        // Code snippet to confirm the payment with clientSecret

        // in .then we are destructuring response

        // console.log('What is in the payment method', elements.getElement(CardElement));
        /**
         * Extra params to be sent here other that what's mentioned in the tutorial.
         * This is to handle the payments outside of india
         */
        const payload = stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    address: {
                        city: "Faridabad",
                        country: "IN",
                        line1: "1234",
                        line2: null,
                        postal_code: "12345",
                        state: "Haryana"
                    },
                    email: "jenny@example.com",
                    name: "chetan",
                    phone: "+15555555555",

                },
            },
            shipping: {
                name: "Jenny Rosen",
                address: {
                    line1: "510 Townsend St",
                    postal_code: '98140',
                    city: "San Francisco",
                    state: 'CA',
                    country: 'US',
                }

            }
            // description:`This is test`,
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            console.log('paymentIntent', paymentIntent);

            // pushing the data into the db for each user
            db.collection('users').doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent?.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: actionTypes.REMOVE_FROM_BASKET
            })

            history.replace('/orders')
        }).catch(err => {
            console.log(err);
        })


    }

    /**
     * Method to handle change of Card Element
     * Will do two things
     * - Listen for changes in the card element
     * - And display any errors when the customer adds wrong card details
     */

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '')
    }


    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                    Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Delivery Address</h3>

                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={value => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>

                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>

                                {/* Errors */}
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
