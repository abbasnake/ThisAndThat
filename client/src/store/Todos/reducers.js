import {
  UPDATE_TODO_LISTS,
  SET_LOADING
} from './actions.js';

const initialState = {
  todoLists: [],
  isLoading: true
}
  
const todosReducer = (state = initialState, action) => {
  const stateClone = JSON.parse(JSON.stringify(state));
  const { type, todoLists, isLoading } = action;

  switch (type) {
    case UPDATE_TODO_LISTS:
      return { ...stateClone, todoLists: [...todoLists] };

    case SET_LOADING:
      return { ...stateClone, isLoading };

    default:
      return state;
  } 
}

export default todosReducer;