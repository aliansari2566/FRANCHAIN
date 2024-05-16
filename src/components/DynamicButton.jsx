// DynamicButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { RightOutlined } from "@ant-design/icons";

export const DynamicButton  = ({ text }) => {
  return (
    <button className="dynamic-button" >
      {text}
      <RightOutlined />
    </button>
  );
};

DynamicButton.propTypes = {
  text: PropTypes.string.isRequired,
};


