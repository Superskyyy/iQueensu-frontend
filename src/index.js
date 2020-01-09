import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';
import {ConnectedRouter as Router} from "connected-react-router";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import Intl from "./components/accessories/Intl";
import {store, persistor} from './store';
import history from "./utils/history";
import './index.css';
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* initializing states in redux store */}
            {/* <BootStrap> */}
                <Router history={history}>
                    <Intl>
                        <App />
                    </Intl>
                </Router>
            {/* </BootStrap> */}
        </PersistGate>
    </Provider>
, document.getElementById('root'));
serviceWorker.register();
