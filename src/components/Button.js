import React from "react";
import "./Button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const STYLE = ["btn--primary", "btn--outline"];
  const SIZE = ["btn--medium", "btn-large"];

  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <button
      type={type}
      className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default Button;
