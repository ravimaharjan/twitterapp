import axios from 'axios';


const registerUser = (user) => {
    return axios({
        method: 'POST',
        url: 'http://localhost:3001/api/v1/auth/register/',
        data: {
            username: user.username,
            email: user.email,
            password: user.password
        },
        config: { headers: { 'Content-Type': 'application/json' } }
    }).then(response => {
        return response.data
    }).catch(error => {
        console.error("User registration failed" + error)
        return error;
    });
}

const userApi = {
    registerUser: registerUser
}
export default userApi;

