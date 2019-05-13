const { buildSchema } = require('graphql');

const schema = buildSchema(`
 type Query {
   todoLists: [TodoList]
   getTodoList(listId: String!): [TodoList]
 }

 type Mutation {
   addNewTodoList: [TodoList]
   deleteTodoList(listId: String!): [TodoList]
   addNewTodoToList(listId: String!): [TodoList]
   deleteTodoFromList(listId: String!, todoId: String!): [TodoList]
   toggleTodoCompletionStatus(listId: String!, todoId: String!): [TodoList]
   toggleTodoListCompletionStatus(listId: String!): [TodoList]
   editTodoTitle(listId: String!, todoId: String!, newTitle: String!): [TodoList]
   editTodoListTitle(listId: String!, newTitle: String!): [TodoList]
   toggleOpenCloseTodoList(listId: String!): [TodoList]
 }

 type Todo {
   id: String
   title: String
   isComplete: Boolean
   created: String
  }

  type TodoList {
    id: String
    title: String
    isComplete: Boolean
    isOpen: Boolean
    todos: [Todo]
  }
`);

module.exports = schema;