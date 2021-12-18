/* eslint-disable no-undef */
import { ActionType } from 'redux/actionType';
const initailState = {
    cart: null,
};
const cartReducers = (state = initailState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            if (action.payload.totalQty) {
                // eslint-disable-next-line no-return-assign
                return { cart: action.payload };
            }

            let cart = state.cart;
            const product = action.payload;
            if (!cart) {
                cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0,
                };
            }
            if (!cart.items[product._id]) {
                cart.items[product._id] = {
                    item: product,
                    qty: 1,
                };
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + product.price;
            } else {
                cart.items[product._id].qty = cart.items[product._id].qty + 1;
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + product.price;
            }

            // localStorage.setItem('addTocat',JSON.stringify(cart))
            localStorage.setItem('addToCart', JSON.stringify(cart));

            // eslint-disable-next-line no-return-assign
            return { cart: cart };
        }

        case ActionType.INCREMENT_TO_CART: {
            const { pd, type } = action.payload;
            const cart = state.cart;
            const price = pd.item.price;
            console.log(cart, 'cart');
            if (type === 'plus') {
                cart.items[pd.item._id].qty = cart.items[pd.item._id].qty + 1;
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = price + Number(cart.totalPrice);
            } else {
                if (pd.qty < 1) {
                    delete cart.items[pd.item._id];
                } else {
                    console.log('minus');
                    cart.items[pd.item._id].qty = cart.items[pd.item._id].qty - 1;
                    cart.totalQty = cart.totalQty - 1;
                    cart.totalPrice = cart.totalPrice - price;
                }
            }
            localStorage.setItem('addToCart', JSON.stringify(cart));
            return { cart: cart };
        }

        case ActionType.DECREMENT_TO_CART: {
            const newState = [state.length - action.payload];
            return newState;
        }

        case ActionType.REMOVE_TO_CART: {
            const newState = [state.filter((pd) => pd !== action.payload)];
            return newState;
        }

        default:
            return state;
    }
};

export default cartReducers;
