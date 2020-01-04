import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transforms from "./transform";
import history from "../utils/history"
import {routerMiddleware} from "connected-react-router";

const initialState = {
};
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
