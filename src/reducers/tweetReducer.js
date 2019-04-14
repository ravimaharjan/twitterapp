import * as types from '../actions/actionTypes';
import { tweetConstants } from "../constants/tweetconstant";
// import initialState from './initialState';


const initState = {
    tweets: []
}
 function tweetReducer(state=initState, action){
    switch(action.type) {

        case types.LOAD_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: [...state.tweets, ...action.tweets],
            }
        case tweetConstants.TWEETS_SEARCH_SUCCESS:
            return {
                ...state,
                tweets: [...action.tweets]
            }
        case tweetConstants.CLEAR_TWEETS:
            console.log("clear reducer reached");
            return {
                ...state,
                tweets: [],
            }
        default:
            return state;
    }
}

export default tweetReducer;