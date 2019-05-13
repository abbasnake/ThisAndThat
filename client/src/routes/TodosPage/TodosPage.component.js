import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../../components/Placeholder';
import TodoList from '../../components/TodoList';
import NewListButton from '../../components/NewListButton';
import { sortByCompletionStatus } from '../../utils/helpers';
import './TodosPage.scss';

const TodosPage = ({ todos: { todoLists, isLoading }, addNewTodoList }) => {
  const renderTodoLists = lists => (
    lists
      .sort((a, b) => sortByCompletionStatus(a, b))
      .map(list => <TodoList key={ list.id } todoList={ list } />)
  );

  return (
    <div className="TodosPage">
      { isLoading ? <Placeholder /> : renderTodoLists(todoLists) }
      <NewListButton onClick={ () => addNewTodoList() } />
    </div>
  );
}

TodosPage.propTypes = {
  todos: PropTypes.shape({
    todoLists: PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
    ).isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  addNewTodoList: PropTypes.func.isRequired
}

export default TodosPage;
