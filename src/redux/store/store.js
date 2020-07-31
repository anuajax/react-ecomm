import { createStore,applyMiddleware } from 'redux';
//middleware to catch and isplay the dispatched actions 
//recieve actions in do something with thme and pass to root reducer
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middlewares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;