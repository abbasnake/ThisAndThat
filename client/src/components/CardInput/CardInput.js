import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardInput.scss';

const CardInput = ({ value, onBlur }) => {
  const [cardTitle, setCardTitle] = useState(value);

  return (
    <input
      className="CardInput"
      value={ cardTitle }
      onChange={ event => setCardTitle(event.target.value) }
      onBlur={ () => onBlur(cardTitle) }
      autoFocus
    />
  )
}

CardInput.propTypes = {
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default CardInput;
