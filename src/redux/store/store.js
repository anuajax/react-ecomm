import { createStore,applyMiddleware } from 'redux';
//middleware to catch and isplay the dispatched actions 
//recieve actions in do something with thme and pass to root reducer
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import {persistStore} from 'redux-persist';

import thunk from 'redux-thunk';

const middlewares = [thunk];
if(process.env.NODE_ENV==='development')
middlewares.push(logger);

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default {store,persistor};