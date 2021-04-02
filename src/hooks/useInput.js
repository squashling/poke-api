import React, { useState } from "react";
import { Input } from "components/Input";

export const useInput = props => {
  const [value, setValue] = useState(props.initialValue);
  const handleChange = value => {
    setValue(value);
  };

  const input = (
    <Input
      value={props.value}
      onChange={handleChange}
      type={props.type}
      name={props.name}
    />
  );
  return [value, input];
};
