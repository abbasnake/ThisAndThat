import { connect } from 'react-redux';
import TodoListComponent from './TodoList.component';
import { addNewTodoToList } from '../../store/Todos/actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  addNewTodoToList: listId => dispatch(addNewTodoToList({ listId }))
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);

export default TodoListContainer;