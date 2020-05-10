import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugReducer from './reducers/bugReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  authState: authReducer,
  bugState: bugReducer
});

const store = createStore(rootReducer);

export default store;
