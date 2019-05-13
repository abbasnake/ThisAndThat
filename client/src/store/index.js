import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './Todos/reducers';
import { getTodoLists } from './Todos/actions';

const rootReducer = combineReducers({ todos: todosReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getTodoLists()); // request todos on app load

export default store;