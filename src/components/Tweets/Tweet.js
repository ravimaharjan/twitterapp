import React, { Component } from 'react';
import { connect } from 'react-redux';


class Tweet extends Component {
    render() {
        const tweet = this.props.tweet
        return (
            <div className="center">
                <h2>Tweet Details</h2>
                <div>
                    Tweet : { tweet.twitter.name }
                    <br/>
                    Text : { tweet.text }
                    <br/>
                    Location : { tweet.twitter.location}
                    <br/>
                    Followers Count: { tweet.twitter.followers_count}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let tweet_id = ownProps.match.params.tweet_id;
    console.log(tweet_id)
    return {
        tweet: state.tweets.find(tweet => tweet.id = tweet_id)
    }
}
export default connect(mapStateToProps)(Tweet);