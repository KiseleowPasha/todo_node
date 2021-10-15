import React, { useEffect } from 'react';
import { Todo } from '../todo/todo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../store/async';
import { InputTodo } from '../inputTodo/inputTodo';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const loaded = useSelector((state) => state.todos.loaded);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      {loaded ? (
        <div className='todos'>
          <h1>Мои дела:</h1>
          <InputTodo />
          {todos.length === 0 ? (
            <span>Здесь пусто</span>
          ) : (
            todos.map((todo) => <Todo key={todo.id} info={todo} />)
          )}
        </div>
      ) : (
        <h1>Загрузка</h1>
      )}
    </>
  );
};
