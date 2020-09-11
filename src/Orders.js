import React, { useState, useEffect } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import Order from './Order';

function Orders() {
    /**
     * Getting basket and user from the store
     * set state variable orders to store all the orders
     */
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    /**
     * onSnapshot provides realtime snapshot of the db for every updates
     */
    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user])
      
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>

        </div>
    )
}

export default Orders
