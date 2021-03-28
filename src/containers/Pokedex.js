import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "redux/ducks/pokedex";
import { Spinner } from "components/LoadingSpinner/Spinner";

export default function Pokedex() {
  const pokemonList = useSelector((state) => state.pokedex.pokemonList);
  const offset = useSelector((state) => state.pokedex.offset);
  const loadingPokemon = useSelector((state) => state.pokedex.loadingPokemon);
  const dispatch = useDispatch();
  const [pokeIndex, setPokemonIndex] = useState(0);
  const [xAxis, setXAxis] = useState(0);
  const [widthImg] = useState(40);

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [dispatch]);

  const nextPokemon = () => {
    if (pokeIndex < pokemonList.length - 1) {
      imageSlideNext();
      let newIndex = pokeIndex + 1;
      setPokemonIndex(newIndex);
      imageSlideNext();
    } else if (pokeIndex === pokemonList.length - 1) {
      let newOffset = offset + 20;
      dispatch(getPokemon(newOffset));
      setPokemonIndex(0);

      imageSlideNext();
    } else return;
  };

  const prevPokemon = () => {
    if (pokeIndex > 0) {
      imageSlidePrev();
      let newIndex = pokeIndex - 1;
      setPokemonIndex(newIndex);
      imageSlidePrev();
    } else if (pokeIndex === 0 && offset > 0) {
      let newOffset = offset - 20;
      setPokemonIndex(19);
      dispatch(getPokemon(newOffset));
      imageSlidePrev();
    } else return;
  };

  const imageSlideNext = () => {
    let imageListLength = pokemonList.length;

    let newXAxis = xAxis === imageListLength * widthImg ? 0 : xAxis;
    newXAxis += widthImg;
    newXAxis %= imageListLength * widthImg;
    setXAxis(newXAxis);
    let slider = document.getElementById("image-slider-container");
    slider.querySelector("#pokedex-window").style.marginLeft =
      "-" + newXAxis + "rem";
  };

  const imageSlidePrev = () => {
    let imageListLength = pokemonList.length;

    let newXAxis = xAxis === 0 ? imageListLength * widthImg : xAxis;
    newXAxis -= widthImg;
    setXAxis(newXAxis);

    let slider = document.getElementById("image-slider-container");
    slider.querySelector("#pokedex-window").style.marginLeft =
      "-" + newXAxis + "rem";
  };

  const detailsView = (pokemon) => {
    return <div className="details-container">{pokemon.name}</div>;
  };

  const showMoreDetails = () => {
    console.log("click click mf");
  };

  return (
    <div className="pokedex-wrapper">
      <div id="image-slider-container" className="image-slider-container">
        <div id="pokedex-window" className="pokedex-window">
          {loadingPokemon ? (
            <Spinner />
          ) : (
            <>
              {pokemonList.map((pokemon, i) => (
                <div className="display-container">
                  <img
                    key={pokemon.id}
                    className="pokemon-sprite "
                    src={pokemon.sprites.front_default}
                  />

                  {i === pokeIndex && detailsView(pokemon)}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="game-arrows-wrapper">
        <div className="game-arrows-vertical">
          <div onClick={showMoreDetails} className="clickable">
            <div className="up" />
            <i className="info-arrow material-icons">keyboard_arrow_up</i>
          </div>
          <div onClick={showMoreDetails} className="clickable">
            <div className="down" />
            <i className="hide-arrow material-icons">keyboard_arrow_down</i>
          </div>
        </div>
        <div className="game-arrows-horizontal">
          <div onClick={prevPokemon} className="clickable">
            <div onClick={prevPokemon} className="prev" />
            <i className="prev-arrow material-icons">keyboard_arrow_left</i>
          </div>
          <div onClick={nextPokemon} className="clickable">
            <div onClick={nextPokemon} className="next" />
            <i className="next-arrow material-icons">keyboard_arrow_right</i>
          </div>
        </div>
      </div>
    </div>
  );
}
