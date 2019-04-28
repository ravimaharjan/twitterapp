import axios from 'axios';


// function registerUser(user) {
//     console.log(user)
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch('http://localhost:3001/api/v1/user', requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 console.log("error")
//                 // auto logout if 401 response returned from api
//                 // logout();
//                 // location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }


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
        // console.log(response)
        return response.data
    }).catch(error => {
        console.log("User registration failed" + error)
        return error;
    });
}

const userApi = {
    registerUser: registerUser
}
export default userApi;

