import React from 'react';
import PropTypes from 'prop-types';
import './NewTodoButton.scss';

const NewTodoButton = ({ onClick }) => (
  <svg
    className="NewTodoButton"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28.65 28.63"
    onClick={ onClick }
  >
    <path d="M0,13.12c.19-.93.32-1.89.58-2.8a14.32,14.32,0,1,1,16,18.12l-1,.19H13.12a3.58,3.58,0,0,0-.43-.1A14.28,14.28,0,0,1,.61,18.4C.34,17.46.2,16.47,0,15.51Q0,14.31,0,13.12Zm15.9-.4V6.4H12.71v6.34H6.4v3.19h6.34v6.32h3.17V15.89h6.32V12.72Z"/>
  </svg>
);

NewTodoButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewTodoButton;
