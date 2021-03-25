import React from "react";

export const Button = props => {
  return (
    <div className="button" onClick={() => props.onClick(props.id)}>
      {props.label}
    </div>
  );
};
