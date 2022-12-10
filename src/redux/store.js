import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from './reducers/';
import reduxThunk from 'redux-thunk';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)));

export default store;