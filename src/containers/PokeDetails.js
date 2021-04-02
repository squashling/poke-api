import React from "react";
import { useSelector } from "react-redux";
import useSearch from "hooks/useSearch";

export default function PokeDetails() {
  const listItems = useSelector((state) => state.pokeDetails.listItems);

  const [input, results] = useSearch({
    data: listItems,
    type: "text",
    value: "",
  });

  return (
    <div className="poke-details--wrapper">
      <div className="input">{input}</div>
      {results.map((result) => (
        <div className="results">{result.name}</div>
      ))}
    </div>
  );
}
