import authApi from "../api/authApi"
import { userAccountConstant } from "../constants/userAccount.constant";

export function login(userinfo) {
    return function (dispatch) {
        authApi.login(userinfo).then(response=> {
            dispatch(logingUserSuccess({
                username: response.loginData.username, 
                token: response.loginData.token
            }))
        }).catch(error=>{
            dispatch(loginUserFail(error))
        })
    }
}

function logging() {
    return {
        type: userAccountConstant.USER_LOGIN_REQUEST
    }
}

function logingUserSuccess(loginDetail){
    return {
        type: userAccountConstant.USER_LOGIN_SUCCESS,
        username: loginDetail.username,
        token: loginDetail.token
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