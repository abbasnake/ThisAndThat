import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardTitle.scss';

const CardTitle = ({ title, onClick, onDoubleClick }) => {
  const [timer, setTimer] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 0) {
      const timeout = setTimeout(() => {
        setClickCount(0);
        onClick();
      }, 300);

      setTimer(timeout);
      setClickCount(clickCount + 1);
    } else if (clickCount === 1) {
      clearTimeout(timer);
      onDoubleClick();
      setClickCount(0);
    }
  }

  return (
    <span
      className="CardTitle"
      onClick={ handleClick }
    >
      { title }
    </span>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired
}

export default CardTitle;
