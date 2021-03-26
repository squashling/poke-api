import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "redux/ducks/pokedex";

export default function Pokedex() {
  const pokemonList = useSelector((state) => state.pokedex.pokemonList);
  const offset = useSelector((state) => state.pokedex.offset);
  const dispatch = useDispatch();
  const [pokeIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [dispatch, offset]);

  const nextPokemon = () => {
    if (pokeIndex < pokemonList.length - 1) {
      let newIndex = pokeIndex + 1;
      setPokemonIndex(newIndex);
    } else if (pokeIndex === pokemonList.length - 1) {
      setPokemonIndex(0);

      let newOffset = offset + 20;
      dispatch(getPokemon(newOffset));
    } else return;
  };

  const prevPokemon = () => {
    if (pokeIndex > 0) {
      let newIndex = pokeIndex - 1;
      setPokemonIndex(newIndex);
    } else if (pokeIndex === 0 && offset > 20) {
      let newOffset = offset - 20;
      setPokemonIndex(19);
      dispatch(getPokemon(newOffset));
    } else return;
  };
  return (
    <div className="pokedex-wrapper">
      <div className="pokedex-window">
        <img
          className="pokemon-sprite"
          src={pokemonList[pokeIndex].sprites.front_default}
        />
      </div>
      <div className="game-arrows-wrapper">
        <div className="game-arrows-vertical"></div>
        <div className="game-arrows-horizontal">
          <div onClick={prevPokemon} className="prev" />
          <div onClick={nextPokemon} className="next" />
        </div>
      </div>
    </div>
  );
}
