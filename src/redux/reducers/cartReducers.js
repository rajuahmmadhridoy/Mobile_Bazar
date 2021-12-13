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
            // eslint-disable-next-line no-undef
            localStorage.setItem('addToCart', JSON.stringify(cart));

            // eslint-disable-next-line no-return-assign
            return { cart: cart };
        }

        case ActionType.INCREMENT_TO_CART: {
            const cart = state.cart;
            const product = action.payload;
            for (let pdQty = 0; pdQty < cart.items.length; pdQty++) {
                const element = cart.items[pdQty];
                console.log(element, 'element');
            }
            if (cart.items[product._id]) {
                cart.items[product._id].qty = cart.items[product._id].qty + action.payload;
                cart.totalQty = cart.totalQty + action.payload;
            }
            console.log(cart, 'object');
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
