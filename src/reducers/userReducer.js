import { userConstant } from "../constants/user.constant";

const initialState = {
    
}
function userReducer(state=initialState, action) {
    switch(action.type) {
        case userConstant.REGISTER_USER_SUCCESS:
            return {
                ...state,
                userregisterstate: true
            }
    }
}
