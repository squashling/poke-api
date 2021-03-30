import React, { useEffect, useState } from "react";

export const useInputs = props => {
  console.log(props);
  const [inputList, setInputs] = useState([]);

  useEffect(() => {
    let newInputList = props.inputs.map(input => ({
      name: input.name,
      value: ""
    }));
    setInputs(newInputList);
    console.log("hello");
  }, [props.inputs]);

  const handleChange = (value, name) => {
    setInputs(inputList => {
      let foundInput = inputList.find(input => input.name === name);
      foundInput.value = value;
      console.log(inputList);
      return inputList;
    });
  };

  const inputs = inputList.map(input => (
    <input
      value={input.value}
      onChange={e => handleChange(e.target.value, input.name)}
      type={props.type}
    />
  ));

  return [inputList, inputs];
};
