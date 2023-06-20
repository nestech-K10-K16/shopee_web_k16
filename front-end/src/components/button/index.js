import React from 'react';
import './style.css';

const AppButton = (props) => {
  const { children, isNormal = false, isActive = false, className } = props;
  return (
    <button
      className={`${
        isActive
          ? 'button-wrapper--active'
          : isNormal
          ? 'button-wrapper'
          : 'button-wrapper--disabled'
      }`}
    >
      {children}
    </button>
  );
};

export default AppButton;
