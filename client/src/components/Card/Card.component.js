import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import CardTitle from '../CardTitle';
import CardInput from '../CardInput';
import CardCornerLogo from '../CardCornerLogo';
import DeleteButton from '../DeleteButton';
import './Card.scss';

const Card = ({
  title,
  type,
  hasTodos,
  checked,
  toggleTodoCompletionStatus,
  toggleTodoListCompletionStatus,
  toggleOpenCloseTodoList,
  listId,
  todoId,
  isOpen,
  deleteTodoList,
  deleteTodoFromList,
  editTodoListTitle,
  editTodoTitle
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const isTypeList = type === 'list';

  const toggleItemCompletionStatus = () => (
    isTypeList ? toggleTodoListCompletionStatus(listId) : toggleTodoCompletionStatus(listId, todoId)
  );

  const deleteItem = () => (
    isTypeList ? deleteTodoList(listId) : deleteTodoFromList(listId, todoId)
  );

  const submitNewTitle = newTitle => {
    setIsEditMode(false);
    if (newTitle.length > 0 && newTitle !== title) {
      isTypeList ? editTodoListTitle(listId, newTitle) : editTodoTitle(listId, todoId, newTitle);
    }
  }

  const renderCardTitle = () => (
    <CardTitle
      title={ title }
      onClick={ () => isTypeList && !checked && toggleOpenCloseTodoList(listId) }
      onDoubleClick={ () => setIsEditMode(!isEditMode) }
    />
  );

  const renderInput = () => (
    <CardInput
      value={ title }
      onBlur={ newTitle => submitNewTitle(newTitle) }
    />
  );

  return (
    <div className={ checked ? 'Card Card-checked' : 'Card' }>
      <Checkbox checked={ checked } onClick={ toggleItemCompletionStatus }/>
      { isEditMode && !checked ? renderInput() : renderCardTitle() }
      { hasTodos && !isOpen && !checked && <CardCornerLogo /> }
      { checked && <DeleteButton onClick={ deleteItem }/> }
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['list', 'todo']).isRequired,
  checked: PropTypes.bool.isRequired,
  toggleTodoCompletionStatus: PropTypes.func.isRequired,
  toggleOpenCloseTodoList: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  deleteTodoList: PropTypes.func.isRequired,
  deleteTodoFromList: PropTypes.func.isRequired,
  editTodoListTitle: PropTypes.func.isRequired,
  editTodoTitle: PropTypes.func.isRequired,
  todoId: PropTypes.string,
  hasTodos: PropTypes.bool,
  isOpen: PropTypes.bool
}

Card.defaultProps = {
  hasTodos: false,
  todoId: '',
  isOpen: false
}

export default Card;
