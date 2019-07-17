import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

//TESTING
// import { fetchFoods } from './actions/food_actions';
// import { fetchDrinks } from './actions/drink_actions';
//TESTING

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    // TESTING
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    // window.fetchFoods = fetchFoods;
    // window.fetchDrinks = fetchDrinks;
    // TESTING
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
}); 


