import AuthService from 'services/AuthService';

const { ActionType } = require('redux/actionType');

export const login = (payload) => {
    return (dispatch) => {
        AuthService.login(payload).then((data) => {
            console.log(data, 'action data');
            dispatch({
                type: ActionType.LOGIN,
                payload: data,
            });
        });
    };
};
