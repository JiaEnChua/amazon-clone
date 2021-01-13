import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import { notifDuration } from './reducer';

const promise = loadStripe(
  'pk_test_51HTaVRDXbNxJfZo5gJBv456RqhmS2wGRTRAsSu5r6NIo1QGQo7OdhlqJLG5By8KEouLGM9NlyUeQzZagCdkEYRla00oePwfGWs'
);

function App() {
  const [{ notif, lastClicked }, dispatch] = useStateValue();

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        notif.length > 0 &&
        (new Date() - lastClicked) / 1000 >= notifDuration
      ) {
        dispatch({
          type: 'EMPTY_NOTIF',
        });
      }
    }, notifDuration * 1000);
    return () => clearInterval(interval);
  }, [lastClicked, notif]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
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
