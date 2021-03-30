import React, { useState } from "react";

export const useInput = props => {
  const [value, setValue] = useState(props.initialValue);
  const handleChange = value => {
    setValue(value);
  };

  const input = (
    <input
      value={value}
      onChange={e => handleChange(e.target.value)}
      type={props.type}
    />
  );
  return [value, input];
};
