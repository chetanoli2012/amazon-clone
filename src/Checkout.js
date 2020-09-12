import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                    alt="Checout advertisement"
                />
                <div>
                    {user && <h3>{`Hello, ` + user.email}</h3>}
                    <h2 className="checkout__title">Your Shopping basket</h2>
                    <FlipMove 
                    // enterAnimation={{
                    //     from: ticketNotVisibleState,
                    //     to: {}
                    // }}
                    //     leaveAnimation={{
                    //         from: {},
                    //         to: ticketNotVisibleState
                    //     }}
                    >
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
                    </FlipMove>

                </div>
            </div>

            <div className="checkout__right">
                {/* <h2>The subtotal will go here</h2> */}
                <Subtotal />
            </div>

        </div>
    );
}

export default Checkout;
