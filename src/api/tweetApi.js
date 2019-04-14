
import axios from 'axios';

const api = 'http://localhost:3001/api/v1/tweets/'
class TweetApi {
  static getAllTweets() {
    return axios.get(api).then(response => {
      return response.data;
    }).catch(error => {
      console.log("error tweetapi")
      console.log(error)
      return error;
    });
  }

  static searchTweets(searchText) {
    return axios.get(api+searchText).then((response) =>{
      return response.data
    }).catch((error)=>{
      console.log("Error occured during Tweet search")
      console.log(error)
      return error;
    })
  }
}

export default TweetApi;