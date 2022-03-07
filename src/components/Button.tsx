import React, { FC } from "react";

interface IPropsButton {
  children: React.ReactChild | React.ReactNode | string;
  onClick: () => void;
  className: string;
}

export const Button: FC<IPropsButton> = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
