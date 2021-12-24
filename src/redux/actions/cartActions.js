const { ActionType } = require('redux/actionType');

export const addToCart = (payload) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload,
    };
};

export const updateQuantity = (payload) => {
    return {
        type: ActionType.UPDATE_QUANTITY,
        payload,
    };
};

export const removeToCart = (payload) => {
    return {
        type: ActionType.REMOVE_TO_CART,
        payload,
    };
};

export const clearToCart = () => {
    return {
        type: ActionType.CLEAR_TO_CART,
    };
};

// export default {addToCart,removeToCart,clearToCart};
