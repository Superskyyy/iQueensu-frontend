import { combineReducers } from 'redux';
import rootReducer from './root';
import {connectRouter} from "connected-react-router";

export default (history) => combineReducers({
  root: rootReducer,
  router: connectRouter(history)
})
