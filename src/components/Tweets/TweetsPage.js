
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
        // axios.get("https://jsonplaceholder.typicode.com/todos")
        this.props.loadTweets()
    }
    handleClearTweets = (e) => {
        console.log("clearing tweets");
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
                        {state.hideSearch ? <TweetList tweets={this.props.tweets} /> : <TweetSearch/>}
                    </div>
                    {/* <div style="float: right">
                        <div className="col-md-4">
                            <TweetList tweets={this.props.tweets} />
                        </div>
                    </div> */}
                </div>

            </div>
        );
    }
}

/* The mapStateToProps function has a very important job: receive application 
state from the store whenever state has changed and make data from that data
 available to the component as props
 */

// const mapStateToProps = (state) => ({
//     tweets: state.tweets
// })

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTweets: (all) => {
            dispatch(tweetActions.loadTweets(all))
        },
        clearTweets: () => {
            dispatch(tweetActions.clearTweets())

        }
    }
}

// const mapDispatchToProps = {
//     loadTweets,
// }

// Tweets.propTypes = {
//     tweets: PropTypes.array.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(TweetsPage)
// export default Tweets

