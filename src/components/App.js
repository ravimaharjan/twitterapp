import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import TweetsPage from './Tweets/TweetsPage';
import Tweet from './Tweets/Tweet';
import UserRegister from './UserAccount/UserRegister';
import UserLogin from './UserAccount/UserLogin';
import { ProtectedView } from "./ProtectedView";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const RouteConfig = ({ isAuthenticated }) => (
    <Switch>
        <ProtectedView exact={true} path='/' isAuthenticated={ isAuthenticated } component={Home} />
        <ProtectedView path='/tweets' isAuthenticated={isAuthenticated} component={TweetsPage} />
        <ProtectedView path='/category' isAuthenticated={isAuthenticated} component={Category} />
        <Route path='/register' component= {UserRegister} />
        <Route path='/login' component={UserLogin} />
        <ProtectedView path="/:tweet_id" isAuthenticated={isAuthenticated} component={Tweet} />
    </Switch>
)

RouteConfig.propTypes = {
    isAuthenticated: PropTypes.bool
}

class App extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <RouteConfig isAuthenticated={this.props.userLoggedIn} />
            </div>
        );
    }
}

App.propTypes = {
    userLoggedIn: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        ...state,
        userLoggedIn: state.authReducer.userLoggedIn
    }
}

export default connect(mapStateToProps, null)(App);
