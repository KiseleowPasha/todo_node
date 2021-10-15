import { createActionLoadTodos } from './reducersTodos';
const url = '/get_data_base';

export const fetchTodos = () => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((todos) => dispatch(createActionLoadTodos(todos)))
      .catch((error) => console.log(error));
  };
};
