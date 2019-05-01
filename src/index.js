import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import rootReducer from "./reducers/rootReducer";
import tweetReducer from "./reducers/tweetReducer";
import userAccountReducer from "./reducers/userAccountReducer";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { getAuthState, saveAuthState } from './utils/localstorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({ tweetReducer, userAccountReducer }),
    { ...getAuthState() },
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    saveAuthState(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// <Router history={browserHistory} routes = {routes} />