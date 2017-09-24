import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';

import reducerRegistry from './shared/registry/reducerRegistry';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers(reducerRegistry.toObject());

const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;