import React from 'react';
import { useDispatch } from 'react-redux';
import {
  createActionCompleteTodo,
  createActionDeleteTodo,
} from '../../store/reducersTodos';
import './todo.css';

export const Todo = ({ info }) => {
  const dispatch = useDispatch();

  const handlerOnChangeTodo = (id) => {
    dispatch(createActionCompleteTodo(id));
  };

  const handlerDeleteTodo = (id) => {
    dispatch(createActionDeleteTodo(id));
  };

  return (
    <div className='todo'>
      <input
        type='checkbox'
        id='checkbox'
        checked={info.completed}
        onChange={() => handlerOnChangeTodo(info.id)}
      />
      <label htmlFor='checkbox' className={info.completed ? 'checked' : ''}>
        {info.value}
      </label>
      <span className='delete' onClick={() => handlerDeleteTodo(info.id)}>
        X
      </span>
    </div>
  );
};
