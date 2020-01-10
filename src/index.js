// Packages
import {ConnectedRouter as Router} from "connected-react-router";
import React                       from 'react';
import ReactDOM                    from 'react-dom';
import {Provider}                  from "react-redux";
import {PersistGate}               from 'redux-persist/integration/react';
import Intl                        from "./components/accessories/Intl";
import App                         from './containers/App';
// Styles
import './index.css';
import {persistor, store}          from './store';
import history                     from "./utils/history";
//
import * as serviceWorker          from './utils/serviceWorker';

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
