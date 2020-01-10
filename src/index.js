// Packages
import React                       from 'react';
import ReactDOM                    from 'react-dom';
import {ConnectedRouter as Router} from "connected-react-router";
import {PersistGate}               from 'redux-persist/integration/react';
import {Provider}                  from "react-redux";
//
import * as serviceWorker          from './utils/serviceWorker';
import Intl                        from "./components/accessories/Intl";
import {store, persistor}          from './store';
import history                     from "./utils/history";
import App                         from './containers/App';
// Styles
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* initializing states in redux store */}
        {/* <BootStrap> */}
        <Router history={history}>
          <Intl>
            <App/>
          </Intl>
        </Router>
        {/* </BootStrap> */}
      </PersistGate>
    </Provider>
    , document.getElementById('root'));
serviceWorker.register();
