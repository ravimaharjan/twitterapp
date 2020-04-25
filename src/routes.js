import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Category';
// import HomePage from './components/home/HomePage';
// import Tweets from './components/TweetComponents/tweets';
// import AboutPage from './components/about/AboutPage';
// import CatPage from './components/cats/CatPage';
// import NewCatPage from './components/cats/NewCatPage';
// import LogInPage from './components/LogInPage';
// import auth from './auth/authenticator';

export default (
    <BrowserRouter>
        <Route exact path="/" component={App}>
            <Route path='/Home' component={Home}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/about' component={About}></Route>
        </Route>
    </BrowserRouter>
);

// function requireAuth(nextState, replace) {
//   console.log(auth.loggedIn());
//   if (!auth.loggedIn()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }