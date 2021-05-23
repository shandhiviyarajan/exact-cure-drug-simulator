import { combineReducers } from 'redux';
import searchReducer from './searchReducers';
import covariantReducer from './covariantReducer';
import formReducer from './formReducer';
import simulatorReducer from './simulatorReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  covariant: covariantReducer,
  form:formReducer,
  simulator:simulatorReducer
});

export default rootReducer;
