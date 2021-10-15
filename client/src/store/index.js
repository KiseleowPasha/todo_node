import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerInputTodo } from './reducerInputTodo';
import { reducerTodos } from './reducersTodos';

const rootReducer = combineReducers({
  todos: reducerTodos,
  valueInInput: reducerInputTodo,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
