// Packages
import {routerMiddleware}                      from "connected-react-router";
import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore}          from 'redux-persist';
import storage                                 from 'redux-persist/lib/storage';
import thunk                                   from "redux-thunk";
//
import history                                 from "../utils/history";
import rootReducer                             from "./reducers";
import transforms                              from "./transform";

const initialState = {};
const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage: storage,
    //stateReconciler: hardSet,
    transforms: [transforms],
    whitelist: ['root']
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//** Deprecated **//
// export const store = createStore(
//     persistedReducer,
//     initialState,
//     compose(
//         applyMiddleware(
//             routerMiddleware(history),
//             ...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//         //** Deprecated **//
//         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

export const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            ...middleware))
);

export const persistor = persistStore(store);
