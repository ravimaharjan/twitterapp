
export const getAuthState = () => {
    try {
        const token = localStorage.getItem('token')
        return token
    }
    catch(err) {
        return undefined;
    }
}

export const saveAuthState = (state) => {
    try {
        // console.log("setting the local storage", state.userAccountReducer)
        if (state.userAccountReducer.token === undefined) {
            return;
        }
        localStorage.setItem('token', state.userAccountReducer.token);

    }
    catch(err) {
        console.log(err)
    }
}