import { ActionType } from 'redux/actionType';

const initialState = {
    data: null,
    status: 'idle',
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_PENDING:
            return {
                data: null,
                status: 'pending',
                error: null,
            };

        case ActionType.LOGIN_SUCCESS:
            // console.log('action', action.payload);
            return {
                ...state,
                status: 'success',
                error: null,
                data: action.payload,
            };

        case ActionType.LOGIN_ERROR:
            // console.log('action', action.payload);
            return {
                status: 'error',
                error: action.payload,
                data: null,
            };

        case ActionType.LOGOUT:
            return {
                status: null,
                error: null,
                data: null,
            };

        default:
            return state;
    }
};

export default authReducer;
