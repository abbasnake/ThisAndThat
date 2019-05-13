import { connect } from 'react-redux';
import TodosPageComponent from './TodosPage.component';
import { addNewTodoList } from '../../store/Todos/actions';

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  addNewTodoList: () => dispatch(addNewTodoList())
});

const TodosPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodosPageComponent);

export default TodosPageContainer;