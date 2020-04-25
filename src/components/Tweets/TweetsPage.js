
import { connect } from 'react-redux';
import TweetList from './TweetList';
import TweetSearch from './TweetSearch';
import React from 'react'
import PropTypes from 'prop-types';
import { tweetActions } from '../../actions/tweetAction';

class TweetsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hideTweetList: false,
            hideSearch: true
        }
    }
    componentDidMount() {
        this.props.loadTweets()
    }

    handleClearTweets = (e) => {
        this.props.clearTweets()
    }

    displayTweets = () => {
        this.setState({
            ...this.state,
            hideSearch: true,
            hideTweetList: false
        })
    }

    displayTweetsSearch = () => {
        this.setState({
            ...this.state,
            hideSearch: false,
            hideTweetList: true
        })
    }

    render() {
        let state = this.state;
        return (
            <div className="col-md-12">
                <div>
                    <h2>Tweets</h2>
                </div>
                <div className="tweetbody">
                    <div className="tweetsidepanel">
                        <div id="tweetlist" onClick={this.displayTweets}>Display Tweets</div>
                        <div id="tweetsearch" onClick={this.displayTweetsSearch}>Search Tweets</div>
                        <div id="clearTweets" onClick={this.handleClearTweets}>Clear Tweets</div>
                    </div>
                    <div>
                    </div>
                    <div>
                        {state.hideSearch ? <TweetList tweets={this.props.tweets} /> : <TweetSearch/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetReducer.tweets
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTweets: (all) => {
            dispatch(tweetActions.loadTweets())
        },
        clearTweets: () => {
            dispatch(tweetActions.clearTweets())

        }
    }
}

TweetsPage.propTypes = {
    tweets: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsPage)

