import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ checked, onClick }) => {
  const renderCheck = () => (
    <svg className="Checkbox-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.92 23.01">
      <path d="M10.08,17.57,9.71,18,2,8.79,0,11.23v.13C.12,11.5,9.53,22.81,9.71,23l.38-.45c5.13-6.49,15.83-20,15.83-20.06L24,0C20.64,4.22,13.86,12.8,10.08,17.57Z"/>
    </svg>
  );

  return (
    <div className="Checkbox" onClick={ onClick }>
      { checked && renderCheck() }
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Checkbox;
