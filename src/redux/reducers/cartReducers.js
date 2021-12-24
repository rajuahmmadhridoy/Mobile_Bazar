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
                    singleTotal: product.price,
                };
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + product.price;
            } else {
                cart.items[product._id].qty = cart.items[product._id].qty + 1;
                cart.items[product._id].singleTotal =
                    cart.items[product._id].singleTotal + product.price;
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + product.price;
            }

            // localStorage.setItem('addTocat',JSON.stringify(cart))
            // localStorage.setItem('addToCart', JSON.stringify(cart));

            // eslint-disable-next-line no-return-assign
            return { cart: cart };
        }

        case ActionType.UPDATE_QUANTITY: {
            const { pd, type } = action.payload;
            const cart = state.cart;
            const price = pd.item.price;
            console.log(cart, 'cart');
            console.log(pd.item, 'pd');
            if (type === 'plus') {
                console.log('plus');
                cart.items[pd.item._id].qty = cart.items[pd.item._id].qty + 1;
                cart.items[pd.item._id].singleTotal =
                    Number(cart.items[pd.item._id].singleTotal) + price;
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = price + Number(cart.totalPrice);
            } else {
                if (pd.qty < 1) {
                    delete cart.items[pd.item._id];
                    cart.totalQty = cart.totalQty + 1;
                } else {
                    console.log('minus', cart);
                    cart.items[pd.item._id].qty = cart.items[pd.item._id].qty - 1;
                    cart.items[pd.item._id].singleTotal =
                        Number(cart.items[pd.item._id].singleTotal) - price;
                    cart.totalQty = cart.totalQty - 1;
                    cart.totalPrice = cart.totalPrice - price;
                }
            }
            // localStorage.setItem('addToCart', JSON.stringify(cart));
            return { cart: cart };
        }

        case ActionType.REMOVE_TO_CART: {
            // const newState = [state.filter((pd) => pd !== action.payload)];
            // return newState;
            const { pd } = action.payload;
            const cart = state.cart;
            if (cart.items[pd.item._id].item._id === pd.item._id) {
                cart.totalQty = cart.totalQty - cart.items[pd.item._id].qty;
                cart.totalPrice = cart.totalPrice - pd.item.price;
                delete cart.items[pd.item._id];
                // console.log(cart.items[pd.item._id].qty,'qty')
            }
            return { cart: cart };
        }

        default:
            return state;
    }
};

export default cartReducers;
