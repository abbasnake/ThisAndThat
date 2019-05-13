import React from 'react'
import PropTypes from 'prop-types';
import './NewListButton.scss';

const NewListButton = ({ onClick }) => (
  <div className="NewListButton">
    <svg
      className="NewListButton-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50.91 50.91"
      onClick={ onClick }
    >
      <path d="M0,35.4c.19-.93.32-1.89.58-2.8a14.32,14.32,0,1,1,16,18.12l-1,.19H13.12a3.58,3.58,0,0,0-.43-.1A14.28,14.28,0,0,1,.61,40.68C.34,39.73.2,38.75,0,37.78Q0,36.59,0,35.4ZM15.9,35V28.68H12.71V35H6.4v3.19h6.34v6.32h3.17V38.17h6.32V35Z"/>
      <path d="M28.63,50.91V47.75H47.69V19.1H31.84V3.22H9.56V19.06H6.4V0H34.52a1.11,1.11,0,0,1,.86.36q7.56,7.58,15.14,15.15a4.33,4.33,0,0,0,.38.3v35.1Zm6.39-35H46.22L35,4.69Z"/>
    </svg>
  </div>
);

NewListButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewListButton;
