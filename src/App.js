import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        {/* <h1>Amazon clone</h1> */}
        <Header />
        <Switch>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>


  );
}

export default App;
