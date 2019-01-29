import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import history from './history'
import store from "./store";
import App from './containers/App';
import './index.css';

const root = document.getElementById('root');
if(root !== null){
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
        , root);
}

serviceWorker.register();
