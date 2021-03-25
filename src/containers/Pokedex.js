import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "redux/ducks/pokedex";

export default function Pokedex() {
  const pokemonList = useSelector(state => state.pokedex.pokemonList);
  const offset = useSelector(state => state.pokedex.offset);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [dispatch, offset]);

  console.log(pokemonList);
  return (
    <div className="pokedex-wrapper">
      pokedex
      <div className="pokedex-window"></div>
      <div className="game-arrows-wrapper">
        <div className="game-arrows-vertical"></div>
        <div className="game-arrows-horizontal"></div>
      </div>
    </div>
  );
}
