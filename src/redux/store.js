import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import cartReducers from './reducers/cartReducers';

const combineReducer = combineReducers({
    cartReducers,
    authReducer,
});

const middlewere = applyMiddleware(thunk);
export const store = createStore(combineReducer, composeWithDevTools(middlewere));
