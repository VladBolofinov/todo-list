import { createStore, applyMiddleware, compose } from 'redux';
import { save } from "redux-localstorage-simple";
import reducers from '../reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(save({ namespace: 'todo-list' }))
)(createStore);

export const store = createStoreWithMiddleware(reducers);








