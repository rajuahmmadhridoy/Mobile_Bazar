import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducers from './cartReducers';

export const rootReducer = combineReducers({
    cartReducers,
    authReducer,
});
