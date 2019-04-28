import { userAccountConstant } from "../constants/userAccount.constant";


const initialState = {
    userRegisterSuccess: false,
    userRegisterError: ""
}

function userAccountReducer(state=initialState, action) {
    console.log('action type', action)
    switch (action.type) {
        case userAccountConstant.USER_REGISTER_SUCCESS:
            return {
                ...state,
                userRegisterSuccess: true
            }
        case userAccountConstant.USER_REGISTER_FAIL:
            return {
                ...state,
                userRegisterSuccess: false,
                userRegisterError: action.error
            }
        case userAccountConstant.USER_LOGIN_SUCCESS:
            return {
                ...state,
                userLoggedIn: true,
                loggingIn: false,
                loggedInUser: action.loggedInUser
            }
        case userAccountConstant.USER_LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                loggedInUser: action.loggedInUser
            }
        case userAccountConstant.USER_LOGIN_FAIL:
        return {
            ...state,
            userLoggedIn: false,
            loginError: action.error
        }
        default:
            return state;
    }
}


export default userAccountReducer;