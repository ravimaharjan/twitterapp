import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Category';

export default (
    <BrowserRouter>
        <Route exact path="/" component={App}>
            <Route path='/Home' component={Home}></Route>
            <Route path='/contact' component={Contact}></Route>
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