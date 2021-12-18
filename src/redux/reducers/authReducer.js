import { ActionType } from 'redux/actionType';

const initialState = {
    data: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.LOGIN:
            console.log("action", action.payload);
            return {
                ...state,
                data: action.payload
            }

        case ActionType.LOGOUT:
            return null;

        default:
            return state;
    }
};

export default authReducer;
