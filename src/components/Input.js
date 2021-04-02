import React from "react";

export const Input = props => {
  return (
    <input
      value={props.value}
      onChange={e => props.onChange(e.target.value, props.name)}
      type={props.type}
    />
  );
};
