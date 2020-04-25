import React from 'react';
import { Route, Link } from 'react-router-dom';

const Category = ({ match }) => {
    console.log(match)
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/popular`}>Popular Tweets</Link>
                    <Link to={`${match.url}/top`}>Top Tweets</Link>
                    <Link to={`${match.url}/trending`}>Trending Tweets</Link>
                    <Link to={`${match.url}/trending`}>Trending Tweets</Link>
                </li>
            </ul>

            <Route path={`${match.path}`} render={({ match }) => { return (<div>{match.params.name}</div>) }} />
            <div className="home">
                <h4 className="center">Category</h4>
                <p>
                    This is my Categor Page.
                </p>
            </div>

        </div>
    )
}

export default Category;