import React from "react";

export const Button = props => {
  return (
    <div
      className={`${
        props.disabled ? "button-disabled" : "button-default"
      } button`}
      onClick={() => props.onClick(props.label)}
    >
      {props.label}
    </div>
  );
};
