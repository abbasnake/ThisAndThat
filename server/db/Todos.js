const uuidv1 = require('uuid/v1'); // for ID generation
const { clone, findIndexById, returnDateString } = require('./helpers');

const Todos = () => {
  let todoLists = [
    {
      id: uuidv1(),
      title: 'My Todos',
      isComplete: false,
      isOpen: false,
      todos: [
        { 
          id: uuidv1(),
          title: 'Eat',
          isComplete: false,
          created: returnDateString()
        },
        {
          id: uuidv1(),
          title: 'Sleep',
          isComplete: true,
          created: returnDateString()
        },
        {
          id: uuidv1(),
          title: 'Repeat',
          isComplete: false,
          created: returnDateString()
        }
      ]
    },
    {
      id: uuidv1(),
      title: 'Homework',
      isComplete: false,
      isOpen: false,
      todos: [
        { 
          id: uuidv1(),
          title: 'Math',
          isComplete: false,
          created: returnDateString()
        },
        {
          id: uuidv1(),
          title: 'Latin',
          isComplete: false,
          created: returnDateString()
        }
      ]
    }
  ];

  const getTodoLists = () => clone(todoLists);

  const getTodoList = listId => {
    const todoListsClone = clone(todoLists);
    
    return todoListsClone.find(todoList => todoList.id === listId);
  }

  const addNewTodoToList = (listId) => {
    const todoListsClone = clone(todoLists);
    const newTodo = { id: uuidv1(), title: 'New Todo', isComplete: false, created: returnDateString() };
    const listIndex = findIndexById(listId, todoListsClone);

    todoListsClone[listIndex].todos.push(newTodo);
    todoLists = todoListsClone;

    return todoLists;
  }

  const addNewTodoList = () => {
    const title = 'New List';
    const todoListsClone = clone(todoLists);
    const newTodoList = { id: uuidv1(), title, isComplete: false, isOpen: false, todos: [] };

    todoListsClone.push(newTodoList);
    todoLists = todoListsClone;

    return todoLists;
  }

  const deleteTodoList = listId => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);

    todoListsClone.splice(listIndex, 1);
    todoLists = todoListsClone;

    return todoLists;
  }

  const deleteTodoFromList = (listId, todoId) => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);
    const todoIndex = findIndexById(todoId, todoListsClone[listIndex].todos);

    todoListsClone[listIndex].todos.splice(todoIndex, 1);
    todoLists = todoListsClone;

    return todoLists;
  }

  const toggleTodoCompletionStatus = (listId, todoId) => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);
    const todoIndex = findIndexById(todoId, todoListsClone[listIndex].todos);
    const currentTodo = todoListsClone[listIndex].todos[todoIndex];

    currentTodo.isComplete = !currentTodo.isComplete;
    todoLists = todoListsClone;

    return todoLists;
  }

  const toggleTodoListCompletionStatus = listId => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);
    const currentStatus = todoListsClone[listIndex].isComplete;

    todoListsClone[listIndex].isComplete = !currentStatus;
    todoListsClone[listIndex].todos.forEach(todo => todo.isComplete = !currentStatus);
    if (!currentStatus) todoListsClone[listIndex].isOpen = false;
    todoLists = todoListsClone;

    return todoLists;
  }

  const editTodoTitle = (listId, todoId, newTitle) => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);
    const todoIndex = findIndexById(todoId, todoListsClone[listIndex].todos);
    const currentTodo = todoListsClone[listIndex].todos[todoIndex];

    currentTodo.title = newTitle;
    todoLists = todoListsClone;

    return todoLists;
  }

  const editTodoListTitle = (listId, newTitle) => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);

    todoListsClone[listIndex].title = newTitle;
    todoLists = todoListsClone;

    return todoLists;
  }

  const toggleOpenCloseTodoList = listId => {
    const todoListsClone = clone(todoLists);
    const listIndex = findIndexById(listId, todoListsClone);

    todoListsClone[listIndex].isOpen = !todoListsClone[listIndex].isOpen;
    todoLists = todoListsClone;
    
    return todoLists;
  }

  return {
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
  }
}

module.exports = Todos();