import React from 'react'
import { connect } from "react-redux";
import TweetList from "./TweetList";
import { tweetActions} from "../../actions/tweetAction";

class TweetSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        };
    }

    handleTextChange = (e) => {
        this.setState({
            ...this.state,
            searchText: e.target.value
        })
    }
    handleSearchTweet = (e) => {
        this.props.searchTweets(this.state.searchText)
    }

    render() {
        return (
            <div>
                <div className="searchBar">
                    <h2> This is search page.</h2>
                    <label >Tweet keyword</label>
                    
                    <input type="text" value={this.state.searchText} onChange={ this.handleTextChange } name="tweetText"  />
                    <button onClick={this.handleSearchTweet}>Search Tweet</button>
                </div>
                <div className="tweetResults">
                    <TweetList tweets={this.props.tweets} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetReducer.tweets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTweets: (searchText) => {
            dispatch(tweetActions.searchTweets(searchText))
            // return {
            //     type: "SEARCH_TWEETS",
            //     searchText: searchText
            // }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetSearch);