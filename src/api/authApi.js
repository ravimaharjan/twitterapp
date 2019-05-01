import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

function login(userinfo) {
    return axios({
        url: 'http://localhost:3001/api/v1/auth/login/',
        method: 'POST',
        data: {
            username: userinfo.username,
            password: userinfo.password
        },
        config: { header: { 'Content-Type': 'application/json' } }
    }).then(response => response.data)
        .catch(error => {
            return error
        })
}

export default {
    login
};
