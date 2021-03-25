import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "redux/ducks/pokedex";

export default function Pokedex() {
  const pokemonList = useSelector((state) => state.pokedex.pokemonList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(1));
  }, []);

  console.log(pokemonList);
  return <div>pokedex</div>;
}
