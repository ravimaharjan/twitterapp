
import * as types from '../actions/actionTypes';

const initState = {
    tweets: []
}

const rootReducer = (state=initState, action) => {
    const { type, tweets } = action
    switch(type) {
        case types.LOAD_TWEETS_SUCCESS: {
            return {
                ...state,
                tweets: [...state.tweets, ...action.tweets],
            }
        }
    }
    return state;
}
export default rootReducer
