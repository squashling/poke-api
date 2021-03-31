import React, { useEffect, useState } from "react";

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
        <input
          value={input.value}
          onChange={e => handleChange(e.target.value, input.name)}
          type={props.type}
        />
      )
    };
  });

  return [inputs];
};
