import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducers from './reducers/cartReducers';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
const combineReducer = combineReducers({
    cartReducers,
    authReducer,
});

const middlewere = applyMiddleware(thunk);
export const store = createStore(combineReducer, composeWithDevTools(middlewere));
