import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './Category';
import TweetsPage from './Tweets/TweetsPage';
import Tweet from './Tweets/Tweet';
import UserRegister from "./UserRegister";

const RouteConfig = () => (
  <Switch>
    <Route exact={true} path='/' component={Home} />
    <Route path='/tweets' component={TweetsPage} />
    <Route path='/category' component={Category} />
    <Route path='/about' component={About} />
    <Route path='/register' component={UserRegister} />
    <Route path="/:tweet_id" component= {Tweet} />
  </Switch>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RouteConfig />
      </div>
    );
  }
}
export default App;
