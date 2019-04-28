import userApi from "../api/userApi"
import { userAccountConstant } from "../constants/userAccount.constant";

export function registerUser(props) {
    return (dispatch) => {
        return userApi.registerUser(props).then(response => {
            dispatch(registerUserSuccess())
        }).catch(error => {
            dispatch(registerUserFail(error))
        })
    }
}

export function registerUserSuccess() {
    return {
        type: userAccountConstant.USER_REGISTER_SUCCESS
    }
}

export function registerUserFail(error) {
    return {
        type: userAccountConstant.USER_REGISTER_FAIL,
        error: error
    }
}

export const userAction = {
    registerUser
};