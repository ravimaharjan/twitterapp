
import axios from 'axios';
import { getAuthState } from './../utils/localstorage';

const api = 'http://localhost:3001/api/v1/tweets/'
// class TweetApi {
//   static getAllTweets() {
//     return axios.get(api).then(response => {
//       return response.data;
//     }).catch(error => {
//       return error;
//     });
//   }

export function searchTweetsFromApi(searchText) {
    return axios.get(api + searchText).then((response) => {
        return response.data
    }).catch((error) => {
        return error;
    })
}


export function getAllTweets() {
    const authState = getAuthState()
    //   axios.defaults.headers.common['Authorization'] = authState['authReducer']['token'];
    console.log('auth state', authState)
    return axios({
        url: 'http://localhost:3001/api/v1/tweets/',
        method: 'GET',
        data: {
            token: localStorage.getItem('token')
        },
        headers: {
            authorization: authState['authReducer']['token']
        }
    }).then(response => response.data)
        .catch(error => {
            return error
        })
}
