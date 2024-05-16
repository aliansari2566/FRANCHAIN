import React from 'react';
import LoginLogo from "../assets/png/logo.png";
import { DynamicButton } from './DynamicButton';

export const DynamicHeader = ({ buttonText }) => {
  return (
    <div>
      <div className="loginHeader">
        <img
          src={LoginLogo}
          alt="logo"
          className="HeaderLogoImage"
          style={{ height: "auto" }}
        />
        <DynamicButton text={buttonText} />
      </div>
    </div>
  );
};
