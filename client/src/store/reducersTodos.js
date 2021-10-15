const localStateTodos = {
  todos: [],
  loaded: false,
};

const LOAD_TODOS = 'LOAD_TODOS';
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';

export const reducerTodos = (state = localStateTodos, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        loaded: true,
      };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case COMPLETE_TODO: {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      currentTodo.completed = !currentTodo.completed;
      return { ...state, todos: [...state.todos] };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case DELETE_COMPLETED_TODOS: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed !== true),
      };
    }
    default:
      return state;
  }
};

export const createActionLoadTodos = (todos) => {
  return {
    type: LOAD_TODOS,
    payload: todos,
  };
};

export const createActionAddTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const createActionCompleteTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const createActionDeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const createActionDeleteCompletedTodos = () => {
  return {
    type: DELETE_COMPLETED_TODOS,
  };
};
