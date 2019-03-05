import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store";
import history from './utils/history'
import * as serviceWorker from './utils/serviceWorker';
import App from './containers/App';
import './index.css';
import Intl from "./components/Intl";

export const iQueensU = () =>{return "iQueensU Web";};

const root = document.getElementById('root');
if(root !== null){
    ReactDOM.render(
        <Provider store={store}>
            <Intl>
                <Router history={history}>
                    <App />
                </Router>
            </Intl>
        </Provider>
        , root);
}

serviceWorker.register();
