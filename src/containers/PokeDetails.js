import React from "react";
import { useSelector } from "react-redux";
import useSearch from "hooks/useSearch";
import { useDispatch } from "react-redux";
import { catchPokemon, getRandomPokemon } from "redux/ducks/pokeDetails";

export default function PokeDetails() {
  const listItems = useSelector((state) => state.pokeDetails.listItems);
  const foundPokemon = useSelector((state) => state.pokeDetails.foundPokemon);
  const dispatch = useDispatch();
  //random generate a pokemon - do pretend search
  const discoverPokemon = () => {
    let randomId = Math.floor(Math.random() * 100);
    console.log(randomId);
    dispatch(getRandomPokemon(randomId));
  };
  //try to catch - check if as pokeballs to cathc with
  const attemptCatch = () => {
    let isCaught = false;
    let pokemon = {};
    if (isCaught && Object.keys(pokemon).length > 0) {
      dispatch(catchPokemon(pokemon, isCaught));
    }
  };
  //add to catch list

  //feed and train to evolve

  const [input, results] = useSearch({
    data: listItems,
    type: "text",
    value: "",
  });

  console.log(foundPokemon);

  return (
    <div className="poke-details--wrapper">
      <div className="caught-pokemon--list">
        <div className="input">{input}</div>
        {results.map((result) => (
          <div className="results">{result.name}</div>
        ))}
      </div>
      <div onClick={discoverPokemon} className="find-button">
        Search for a Pokemon
      </div>
      {foundPokemon && (
        <div className="found-pokemon">
          <div className="">{foundPokemon.name}</div>
        </div>
      )}
    </div>
  );
}
