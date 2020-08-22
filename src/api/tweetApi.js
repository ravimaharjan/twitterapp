
import axios from 'axios';
import { getAuthState } from './../utils/localstorage';

const api = 'http://localhost:3001/api/v1/tweets/'

export function searchTweetsFromApi(searchText) {
    const token = getAuthState()['authReducer']['token'];
    return axios({
        url: api + searchText,
        method: 'GET',
        headers: { Authorization: `${token}` }
    }).then((response) => {
        return response.data
    }).catch((error) => {
        return error;
    })
}


export function getAllTweets() {
    const token = getAuthState()['authReducer']['token'];
    return axios({
        url: 'http://localhost:3001/api/v1/tweets/',
        method: 'GET',
        headers: { Authorization: `${token}` }
    }).then(response => response.data)
        .catch(error => {
            return error
        })
}
