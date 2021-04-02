import { useState } from "react";

export default function useSearch(props) {
  const [searchValue, setSearch] = useState(props.value);

  const handleChange = (value) => {
    setSearch(value);
  };

  const input = (
    <input
      value={searchValue}
      onChange={(e) => handleChange(e.target.value)}
      type={props.type}
    />
  );
  const result =
    props.data && searchValue.length > 0
      ? props.data.filter((data) => data.name.includes(searchValue))
      : props.data;

  return [input, result];
}
