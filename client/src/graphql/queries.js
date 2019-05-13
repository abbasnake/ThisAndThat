// query type fields
const todoFields = `
  id
  title
  isComplete
  created
`;

const todoListFields = `
    id
    title
    isComplete
    isOpen
    todos {
      ${ todoFields }
    }
`;

// queries
const todoLists = `
  {
    todoLists {
      ${ todoListFields }
    }
  }
`;

// mutations
const addNewTodoList = `
  mutation {
    addNewTodoList {
      ${ todoListFields }
    }
  }
`;

const deleteTodoList = `
  mutation ($listId: String!) {
    deleteTodoList(listId: $listId) {
      ${ todoListFields }
    }
  }
`;

const addNewTodoToList = `
  mutation ($listId: String!) {
    addNewTodoToList (listId: $listId) {
      ${ todoListFields }
    }
  }
`;

const deleteTodoFromList = `
  mutation ($listId: String!, $todoId: String!) {
    deleteTodoFromList(listId: $listId, todoId: $todoId) {
      ${ todoListFields }
    }
  }
`;

const editTodoTitle = `
  mutation ($listId: String!, $todoId: String!, $newTitle: String!) {
    editTodoTitle(listId: $listId, todoId: $todoId, newTitle: $newTitle) {
      ${ todoListFields }
    }
  }
`; 

const editTodoListTitle = `
  mutation ($listId: String!, $newTitle: String!) {
    editTodoListTitle (listId: $listId, newTitle: $newTitle) {
      ${ todoListFields }
    }
  }
`;

const toggleTodoCompletionStatus = `
  mutation ($listId: String!, $todoId: String!) {
    toggleTodoCompletionStatus (listId: $listId, todoId: $todoId) {
      ${ todoListFields }
    }
  }
`;

const toggleTodoListCompletionStatus = `
  mutation ($listId: String!) {
    toggleTodoListCompletionStatus(listId: $listId) {
      ${ todoListFields }
    }
  }
`;

const toggleOpenCloseTodoList = `
  mutation ($listId: String!) {
    toggleOpenCloseTodoList(listId: $listId) {
      ${ todoListFields }
    }
  }
`;

export default {
  todoLists,
  addNewTodoList,
  deleteTodoList,
  addNewTodoToList,
  deleteTodoFromList,
  editTodoTitle,
  editTodoListTitle,
  toggleTodoCompletionStatus,
  toggleTodoListCompletionStatus,
  toggleOpenCloseTodoList
};