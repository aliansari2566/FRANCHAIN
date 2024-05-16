// DynamicButton.js
import React from 'react';
import PropTypes from 'prop-types';

export const DynamicButton  = ({ text }) => {
  return (
    <button className="dynamic-button">
      {text}
    </button>
  );
};

DynamicButton.propTypes = {
  text: PropTypes.string.isRequired,
};


