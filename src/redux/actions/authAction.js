import AuthService from 'services/AuthService';

const { ActionType } = require('redux/actionType');

// export const login = (payload) => {
//     return (dispatch) => {
//         AuthService.login(payload).then((data) => {
//             console.log(data, 'action data');
//             dispatch({
//                 type: ActionType.LOGIN,
//                 payload: data,
//             });
//         });
//     };
// };

// export const login = (payload) => async (dispatch) => {
//     // console.log("payload", payload);
//     try {
//         dispatch({
//             type: ActionType.LOGIN_PENDING,
//         });
//         const data = AuthService.login(payload);
//         dispatch({
//             type: ActionType.LOGIN_SUCCESS,
//             payload: data,
//         });
//     } catch (err) {
//         // console.log("error", error?.response?.data?.message);
//         dispatch({
//             type: ActionType.LOGIN_ERROR,
//             payload: err?.response?.data?.message,
//         });
//     }
// };

export const login = (payload) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.LOGIN_PENDING,
        });
        AuthService.login(payload)
            .then((data) => {
                dispatch({
                    type: ActionType.LOGIN_SUCCESS,
                    payload: data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ActionType.LOGIN_ERROR,
                    payload: err?.response?.data?.message,
                });
            });
    };
    // return ;
};

export const logOut = () => {
    return {
        type: ActionType.LOGOUT,
    };
};
