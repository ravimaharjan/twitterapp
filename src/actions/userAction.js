import userApi from "../api/userApi"
import { userConstant } from "../constants/userconstant";



function registerUser(props) {
    return (dispatch) => {
        console.log("registerUser called")
        userApi.registerUser(props).then(response=>
            dispatch(registerUserSuccess())

        ).catch(error=>{
            dispatch(registerUserFail())
        })
    }
}

export function registerUserSuccess(){
    return {
        type: userConstant.USER_REGISTER_SUCCESS
    }
}

export function registerUserFail(){
    return {
        type: userConstant.USER_REGISTER_FAIL
    }
}

export const userAction = {
    registerUser
};

export default registerUser;