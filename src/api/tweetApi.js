
import axios from 'axios';


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
    return axios.get(api+searchText).then((response) =>{
      return response.data
    }).catch((error)=>{
      return error;
    })
  }


export function getAllTweets() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
  return axios({
      url: 'http://localhost:3001/api/v1/tweets/',
      method: 'GET',
      data: {
        token: localStorage.getItem('token')
      },
  }).then(response => response.data)
      .catch(error => {
          return error
      })
}

// export default getAllTweets;