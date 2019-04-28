import { userConstants } from '../constants/userAccount.constant';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};


export function authenticateReducer(state = initialState, action) {
    switch (action.type) {
      case userConstants.USER_LOGIN_REQUEST:
        return {
          loggingIn: true,
          loginError: "",
          loggedInUser: ""
        };
      case userConstants.USER_LOGIN_SUCCESS:
        return {
          loggedIn: true,
          loggingIn: false,
          loginError: "",
          loggedInUser: action.user
        };
      case userConstants.USER_LOGIN_FAILURE:
        return {
            loggedIn: false,
            loggingIn: false,
            loginError: action.error,
            loggedInUser: ""
        };
      case userConstants.LOGOUT:
        return {};
      default:
        return state
    }
  }