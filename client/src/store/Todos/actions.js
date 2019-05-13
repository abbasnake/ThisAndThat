import Api from '../../graphql';

const SET_LOADING = 'SET_LOADING';
const UPDATE_TODO_LISTS = 'UPDATE_TODO_LISTS';

const updateTodoLists = todoLists => ({ type: UPDATE_TODO_LISTS, todoLists });
const setLoading = isLoading => ({ type: SET_LOADING, isLoading });

const apiHelper = (apiName, variables = false) => {
  return async dispatch => {
    dispatch(setLoading(true))
    const response = await Api[apiName](variables);
    dispatch(setLoading(false));
    dispatch(updateTodoLists(response.data[apiName]));
  }
}

const getTodoLists = () => apiHelper('todoLists');
const addNewTodoList = () => apiHelper('addNewTodoList');
const addNewTodoToList = ({ listId }) => apiHelper('addNewTodoToList', { listId });
const toggleTodoCompletionStatus = ({ listId, todoId }) => apiHelper('toggleTodoCompletionStatus', { listId, todoId });
const toggleTodoListCompletionStatus = ({ listId }) => apiHelper('toggleTodoListCompletionStatus', { listId });
const toggleOpenCloseTodoList = ({ listId }) => apiHelper('toggleOpenCloseTodoList', { listId });
const deleteTodoList = ({ listId }) => apiHelper('deleteTodoList', { listId });
const deleteTodoFromList = ({ listId, todoId }) => apiHelper('deleteTodoFromList', { listId, todoId });
const editTodoListTitle = ({ listId, newTitle }) => apiHelper('editTodoListTitle', { listId, newTitle });
const editTodoTitle = ({ listId, todoId, newTitle }) => apiHelper('editTodoTitle', { listId, todoId, newTitle  });

export {
  UPDATE_TODO_LISTS,
  SET_LOADING,
  updateTodoLists,
  getTodoLists,
  addNewTodoList,
  toggleTodoCompletionStatus,
  toggleTodoListCompletionStatus,
  toggleOpenCloseTodoList,
  addNewTodoToList,
  deleteTodoList,
  deleteTodoFromList,
  editTodoListTitle,
  editTodoTitle
};