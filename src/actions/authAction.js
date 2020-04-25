import authApi from "../api/authApi"
import { userAccountConstant } from "../constants/userAccount.constant";

export function login(userinfo) {
    return function (dispatch) {
        authApi.login(userinfo).then(response=> {
            dispatch(logingUserSuccess(userinfo, response.token))
        }).catch(error=>{
            console.log(error)
            dispatch(loginUserFail(error))
        })
    }
}


function logingUserSuccess(loginDetail, token){
    return {
        type: userAccountConstant.USER_LOGIN_SUCCESS,
        payload: {
            username: loginDetail.username,
            token: token
        }

    }
}

function loginUserFail(error) {
    return {
        type: userAccountConstant.USER_LOGIN_FAIL,
        error: error
    }
}

export const authAction = {
    login
};