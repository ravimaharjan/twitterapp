import axios from 'axios';

function login(userinfo) {
    console.log({userinfo})

    console.log()
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
            console.log("User Login failed.")
            return error
        })
}

export default {
    login
};
