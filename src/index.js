import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bulma/css/bulma.min.css";
import App from './App';
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { getLocation, setSubdomain } from './store/actions/locationActions';

// get current domain location
store.dispatch(getLocation());
// set subdomain
store.dispatch(setSubdomain());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
