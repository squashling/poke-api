import React, { useState } from "react";
import { Input } from "components/Input";

export const useInputs = props => {
  const [inputList, setInputs] = useState(
    props.inputs.map(input => ({
      name: input.name,
      value: ""
    }))
  );

  const handleChange = (value, name) => {
    let newInputList = [...inputList];
    let foundInput = newInputList.find(input => input.name === name);
    foundInput.value = value;
    setInputs(newInputList);
  };

  const inputs = inputList.map(input => {
    return {
      name: input.name,
      value: input.value,
      input: (
        <Input
          value={input.value}
          onChange={handleChange}
          type={props.type}
          name={input.name}
        />
      )
    };
  });

  return [inputs];
};
