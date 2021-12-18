import { ActionType } from 'redux/actionType';

const authReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            console.log(action.payload, 'login');
            return { state: action.payload };

        case ActionType.LOGOUT:
            return null;

        default:
            return state;
    }
};

export default authReducer;
