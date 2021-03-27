import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "redux/ducks/pokedex";

export default function Pokedex() {
  const pokemonList = useSelector((state) => state.pokedex.pokemonList);
  const offset = useSelector((state) => state.pokedex.offset);
  const dispatch = useDispatch();
  const [pokeIndex, setPokemonIndex] = useState(0);
  const [xAxis, setXAxis] = useState(0);

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [dispatch, offset]);

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [pokeIndex]);

  const nextPokemon = () => {
    if (pokeIndex < pokemonList.length - 1) {
      imageSlideRight();

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
      imageSlideLeft();

      let newIndex = pokeIndex - 1;
      setPokemonIndex(newIndex);
    } else if (pokeIndex === 0 && offset > 20) {
      let newOffset = offset - 20;
      setPokemonIndex(19);
      dispatch(getPokemon(newOffset));
    } else return;
  };
  const imageSlideRight = () => {
    let imageLength = pokemonList.length - 1;
    // width of one image (in pixels)
    let widthImg = 40;
    let newXAxis = xAxis;
    let slider = document.getElementById("image-slider-container");
    newXAxis += widthImg;
    newXAxis %= imageLength * widthImg;
    console.log("delta", newXAxis);
    setXAxis(newXAxis);

    slider.querySelector("#pokedex-window").style.marginLeft =
      "-" + newXAxis + "rem";
  };
  const imageSlideLeft = () => {
    let imageLength = pokemonList.length - 1;
    // width of one image (in pixels)
    let widthImg = 40;
    let newXAxis = xAxis;
    let slider = document.getElementById("image-slider-container");
    newXAxis -= widthImg;
    newXAxis %= imageLength * widthImg;
    console.log("delta", newXAxis);
    setXAxis(newXAxis);
    slider.querySelector("#pokedex-window").style.marginLeft =
      "-" + newXAxis + "rem";
  };
  return (
    <div className="pokedex-wrapper">
      <div id="image-slider-container" className="image-slider-container">
        <div id="pokedex-window" className="pokedex-window">
          {pokemonList.map((pokemon) => (
            <img
              className="pokemon-sprite "
              src={pokemon.sprites.front_default}
            />
          ))}
          {/* {pokeIndex !== 0 && (
            <img
              className="pokemon-sprite  "
              src={pokemonList[pokeIndex + 1]?.sprites.front_default}
            />
          )}
          <img
            className="pokemon-sprite "
            src={pokemonList[pokeIndex]?.sprites.front_default}
          />
          {pokeIndex !== pokemonList.length - 1 && (
            <img
              className="pokemon-sprite "
              src={pokemonList[pokeIndex - 1]?.sprites.front_default}
            />
          )} */}
        </div>
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
