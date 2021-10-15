import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActionChangeValueInInput } from '../../store/reducerInputTodo';
import {
  createActionAddTodo,
  createActionDeleteCompletedTodos,
} from '../../store/reducersTodos';

export const InputTodo = () => {
  const valueInInput = useSelector((state) => state.valueInInput.value);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const loaded = useSelector((state) => state.todos.loaded);

  const handlerOnChangeInput = ({ target }) => {
    dispatch(createActionChangeValueInInput(target.value));
  };

  useEffect(() => {
    loaded
      ? fetch('/post_data_base', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(todos),
        }).catch((err) => console.log(err))
      : null;
  }, [todos]);

  const handlerAddTodo = (event) => {
    event.preventDefault();
    if (valueInInput !== '') {
      dispatch(
        createActionAddTodo({
          id: Date.now(),
          value: valueInInput,
          completed: false,
        })
      );
      dispatch(createActionChangeValueInInput(''));
    }
  };

  const handlerDeleteCompletedTodos = (event) => {
    event.preventDefault();
    dispatch(createActionDeleteCompletedTodos());
  };

  return (
    <form>
      <input type='text' value={valueInInput} onChange={handlerOnChangeInput} />
      <button type='submit' onClick={handlerAddTodo}>
        Записать
      </button>
      <button onClick={handlerDeleteCompletedTodos}>
        Удалить выполненные задачи
      </button>
    </form>
  );
};
