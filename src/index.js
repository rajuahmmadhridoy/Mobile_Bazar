import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
// import { ActionType } from 'redux/actionType';
import { PersistGate } from 'redux-persist/lib/integration/react';
// eslint-disable-next-line no-undef
// let addToCart = localStorage.getItem('addToCart');
// addToCart = JSON.parse(addToCart);
// if (addToCart) {
//     store.dispatch({
//         type: ActionType.ADD_TO_CART,
//         payload: addToCart,
//     });
// }
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
