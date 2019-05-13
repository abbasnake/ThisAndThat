import { connect } from 'react-redux';
import CardComponent from './Card.component';
import {
  toggleTodoCompletionStatus,
  toggleTodoListCompletionStatus,
  toggleOpenCloseTodoList,
  deleteTodoList,
  deleteTodoFromList,
  editTodoListTitle,
  editTodoTitle
} from '../../store/Todos/actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  toggleTodoCompletionStatus: (listId, todoId) => dispatch(toggleTodoCompletionStatus({ listId, todoId })),
  toggleTodoListCompletionStatus: listId => dispatch(toggleTodoListCompletionStatus({ listId })),
  toggleOpenCloseTodoList: listId => dispatch(toggleOpenCloseTodoList({ listId })),
  deleteTodoList: listId => dispatch(deleteTodoList({ listId })),
  deleteTodoFromList: (listId, todoId) => dispatch(deleteTodoFromList({ listId, todoId })),
  editTodoListTitle: (listId, newTitle) => dispatch(editTodoListTitle({ listId, newTitle })),
  editTodoTitle: (listId, todoId, newTitle) => dispatch(editTodoTitle({ listId, todoId, newTitle }))
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardComponent);

export default CardContainer;