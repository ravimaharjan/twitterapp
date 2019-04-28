
import tweetApi from '../api/tweetApi';
import { tweetConstants } from '../constants/tweet.constant';

export const tweetActions = {
  loadTweets,
  clearTweets,
  searchTweets
};

function loadTweets() {
  return function(dispatch) {
    return tweetApi.getAllTweets().then(response => {
      dispatch(loadTweetsSuccess(response.tweets));
    }).catch(error => {
      dispatch(loadTweetsFail(error.toString()))
    });
  };
  // function loadTweetsSuccess(tweets) { return { type: tweetConstants.LOAD_TWEETS_SUCCESS, tweets: tweets} }
}

function searchTweets(searchText) {
  return function(dispatch) {
    return tweetApi.searchTweets(searchText).then(response=>{
      dispatch(loadTweetSearchSuccess(response.tweets));
    }).catch(error=>{
      dispatch(loadTweetSearchFail(error.toString()))
    })
  };
  function loadTweetSearchSuccess(tweets){ return { type: tweetConstants.TWEETS_SEARCH_SUCCESS, tweets: tweets}}
  function loadTweetSearchFail(tweets){ return { type: tweetConstants.TWEETS_SEARCH_FAIL, tweets: tweets}}
}

function clearTweets() {
  return function(dispatch){
    dispatch({
      type: tweetConstants.CLEAR_TWEETS,
      tweets: []
    })
  };
}

export function loadTweetsSuccess(tweets){
  return {type: tweetConstants.LOAD_TWEETS_SUCCESS, tweets: tweets};
}

export function loadTweetsFail(tweets){
  return {
    type: tweetConstants.LOAD_TWEETS_FAIL,
  }
}