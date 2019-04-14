import axios from 'axios';


const registerUser = (user) => {
    console.log(user)
    axios.post("https://localhost:3001/api/v1/user", {
        username: user.username,
        email: user.email,
        password: user.password
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log("User registration failed" + error)
        return error;
    });
}

const userApi = {
    registerUser: registerUser
}
export default userApi;

