import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51HPvlNF2g5S0AFrZaKq5RZDnRyUr8DH6tmf5A1maTKbpxIGy9P8f7DXDENA1wOweY88z8o2AU84Ycu0NmD0lllUg001QF2pgGo');

function App() {

  const [{ }, dispatch] = useStateValue();

  /* leaving the last parameter as an empty array ensures that this action is done
   * only once when the app componenent loads.
   * In other cases we can send params to this array like [basket, user] which
   * ensures that any changes to basket or user will trigger this action
   */

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is ==== ', authUser);
      if (authUser) {
        // This case is true if the user just logged in or if the user was logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className='app'>
        {/* <h1>Amazon clone</h1> */}

        <Switch>
        <Route path='/orders'>
          <Header />
            <Orders />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            {/* <h1>I am the payment page!</h1> */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>


  );
}

export default App;
