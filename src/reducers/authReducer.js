const initialState = {
    userLoggedIn: false,
    loggedInUser: "",
    loggingIn: false,
    token: ""
}


const authReducer = (state=initialState, action) => {
    const {type, payload } = action
    switch(type) {
    case "USER_LOGIN_SUCCESS":
        return {
            ...state,
            userLoggedIn: true,
            loggedInUser: payload.username,
            token: payload.token,
            loggingIn:false
        }
    default :
        return state
    }
}

export default authReducer