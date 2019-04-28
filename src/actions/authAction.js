import authApi from "../api/authApi"
import { userAccountConstant } from "../constants/userAccount.constant";

export function login(userinfo) {
    return function (dispatch) {
        authApi.login(userinfo).then(response=> {
            console.log('async request complete')
            dispatch(logingUserSuccess(response.user.username))
        }).catch(error=>{
            dispatch(loginUserFail(error))
        })
        console.log("returned")
    }
}

function logging() {
    return {
        type: userAccountConstant.USER_LOGIN_REQUEST
    }
}

function logingUserSuccess(loggedInUser){
    return {
        type: userAccountConstant.USER_LOGIN_SUCCESS,
        loggedInUser: loggedInUser
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