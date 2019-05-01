import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './Category';
import TweetsPage from './Tweets/TweetsPage';
import Tweet from './Tweets/Tweet';
import UserRegister from './UserAccount/UserRegister';
import UserLogin from './UserAccount/UserLogin';
import { ProtectedView } from "./ProtectedView";
import { connect } from 'react-redux';

const RouteConfig = ({ isAuthenticated }) => (
  <Switch>
    <ProtectedView exact={true} isAuthenticated={isAuthenticated} path='/' component={Home} />
    <ProtectedView path='/tweets' isAuthenticated={isAuthenticated} component={TweetsPage} />
    <ProtectedView path='/category' isAuthenticated={isAuthenticated} component={Category} />
    <ProtectedView path='/about' isAuthenticated={isAuthenticated} component={About} />
    <ProtectedView path='/register' isAuthenticated={isAuthenticated} component={UserRegister} />
    <Route path='/login' component={UserLogin} />
    <ProtectedView path="/:tweet_id" isAuthenticated={isAuthenticated} component={Tweet} />
  </Switch>
)

class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RouteConfig isAuthenticated={this.props.state.userLoggedIn} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      state: state.userAccountReducer
  }
}

export default connect(mapStateToProps, null)(App);
