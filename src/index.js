import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import rootReducer from "./reducers/rootReducer";
import tweetReducer from "./reducers/tweetReducer";
import authReducer from "./reducers/authReducer";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { getAuthState, saveAuthState } from './utils/localstorage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    ...getAuthState()
};


const store = createStore(
    combineReducers({ tweetReducer, authReducer }),
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    console.log('state changed ', store.getState())
    saveAuthState(store.getState());
})

ReactDOM.render(
    <Provider store={ store }>
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