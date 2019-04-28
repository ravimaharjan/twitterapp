import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TweetList = ({ tweets }) => {
    return (
        <ul>
            {
            tweets.map(tweet => 
                <li className="list-group-item" key={tweet.id}>
                    <div>
                        <Link to={'/' + tweet.id} >
                            <span>Tweet By:  {tweet.twitter.name}</span>
                            <p style={{ color: "black" }}>
                                Tweet : {tweet.text}
                            </p>
                        </Link>
                    </div>
                </li>
            )
            }
        </ul>
    )
};

// TweetList.propTypes = {
//     tweets: PropTypes.array.isRequired
// };

export default TweetList;