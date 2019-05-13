const {
  getTodoLists,
  getTodoList,
  addNewTodoList,
  deleteTodoList,
  addNewTodoToList,
  deleteTodoFromList,
  toggleTodoCompletionStatus,
  toggleTodoListCompletionStatus,
  editTodoTitle,
  editTodoListTitle,
  toggleOpenCloseTodoList
} = require('../db/Todos');

const resolvers = {
  // quries
  todoLists: () => getTodoLists(),
  getTodoList: ({ listId }) => getTodoList(listId),

  // mutations
  addNewTodoList: () => addNewTodoList(),
  deleteTodoList: ({ listId }) => deleteTodoList(listId),
  addNewTodoToList: ({ listId}) => addNewTodoToList(listId),
  deleteTodoFromList: ({ listId, todoId }) => deleteTodoFromList(listId, todoId),
  toggleTodoCompletionStatus: ({ listId, todoId }) => toggleTodoCompletionStatus(listId, todoId),
  toggleTodoListCompletionStatus: ({ listId }) => toggleTodoListCompletionStatus(listId),
  editTodoTitle: ({ listId, todoId, newTitle }) => editTodoTitle(listId, todoId, newTitle),
  editTodoListTitle: ({ listId, newTitle }) => editTodoListTitle(listId, newTitle),
  toggleOpenCloseTodoList: ({ listId }) => toggleOpenCloseTodoList(listId)
};

module.exports = resolvers;