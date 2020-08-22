import axios from 'axios';
import { getAuthState } from './../utils/localstorage';


function login(userinfo) {
    const authState = getAuthState()
    axios.defaults.headers.common['Authorization'] = authState['authReducer']['token'];
    return axios({
        url: 'http://localhost:3001/api/v1/auth/login/',
        method: 'POST',
        data: {
            username: userinfo.username,
            password: userinfo.password
        },
        config: { header: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          } }
    }).then(response => response.data)
        .catch(error => {
            return error
        })
}

export default {
    login
};
