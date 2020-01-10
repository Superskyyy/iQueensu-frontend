import { combineReducers } from 'redux';
import rootReducer from './root';
import {connectRouter} from "connected-react-router";
import courseReducerHandler from './courseReducers';


export default (history) => combineReducers({
  root: rootReducer,
  courses: courseReducerHandler,
  router: connectRouter(history)
})
