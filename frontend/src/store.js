import { configureStore  } from '@reduxjs/toolkit'
import getAllPizzasReducer from './reducers/pizzaReducer.js';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer.js';
import registerUserReducer from './reducers/userReducer.js';
import loginUserReducer from './reducers/userReducer.js'

const reducer = {

    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer
}

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    cartReducer : {
        cartItems: cartItems 
    },
    loginUserReducer : {
        currentUser : currentUser
    }
};


const store = configureStore({
    reducer: reducer,
    middleware: [thunk],
    preloadedState: initialState,
});

export default store;
