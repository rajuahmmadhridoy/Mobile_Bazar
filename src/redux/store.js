import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducers from './reducers/cartReducers';
const combineReducer = combineReducers({
    cartReducers,
});
export const store = createStore(combineReducer, composeWithDevTools());
