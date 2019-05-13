import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import NewTodoButton from '../NewTodoButton';
import { sortByCompletionStatus } from '../../utils/helpers';
import './TodoList.scss';

const TodoList = ({ todoList: { id, title, isComplete, todos, isOpen }, addNewTodoToList }) => {
  const renderTodos = () => (
    <div className="TodoList-todos">
      {
        todos
          .sort((a, b) => sortByCompletionStatus(a, b))
          .map(todo => (
            <Card
              key={ todo.id }
              type="todo"
              title={ todo.title }
              checked={ todo.isComplete }
              listId={ id }
              todoId={ todo.id }
            />
          ))
       }
    </div>
  );

  return (
    <div className="TodoList">
      <Card
        title={ title }
        type="list"
        hasTodos={ todos.length > 0 }
        checked={ isComplete }
        listId={ id }
        isOpen={ isOpen }
      />  
      { isOpen && renderTodos() }
      { isOpen && <NewTodoButton onClick={ () => addNewTodoToList(id) } /> }
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  addNewTodoToList: PropTypes.func.isRequired
}

export default TodoList;
