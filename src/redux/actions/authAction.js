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

export const login = (payload) => async (dispatch) => {
    console.log("payload", payload);
    try {
        const data = await AuthService.login(payload);
        console.log(data);
        dispatch({
            type: ActionType.LOGIN,
            payload: data,
        });
    } catch (error) {
        console.log("error", error?.response?.data?.message);
    }
}