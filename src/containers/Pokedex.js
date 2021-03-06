import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, setLikePokemon } from "redux/ducks/pokedex";
import { Spinner } from "components/LoadingSpinner/Spinner";
import { HeartEmpty } from "assets/heart_empty";
import { HeartFilled } from "assets/heart_filled";

export default function Pokedex() {
  const pokemonList = useSelector((state) => state.pokedex.pokemonList);
  const offset = useSelector((state) => state.pokedex.offset);
  const loadingPokemon = useSelector((state) => state.pokedex.loadingPokemon);
  const likedList = useSelector((state) => state.pokedex.likedList);
  const dispatch = useDispatch();
  const [pokeIndex, setPokemonIndex] = useState(0);
  const [xAxis, setXAxis] = useState(0);
  const [widthImg] = useState(40);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(getPokemon(offset));
  }, [dispatch]);

  //don't add offser as dependency, it f-s up the call

  const nextPokemon = () => {
    if (pokeIndex < pokemonList.length - 1) {
      setShowMore(false);

      imageSlideNext();
      let newIndex = pokeIndex + 1;
      setPokemonIndex(newIndex);
      imageSlideNext();
    } else if (pokeIndex === pokemonList.length - 1) {
      setShowMore(false);

      let newOffset = offset + 20;
      dispatch(getPokemon(newOffset));
      setPokemonIndex(0);

      imageSlideNext();
    } else return;
  };

  const prevPokemon = () => {
    if (pokeIndex > 0) {
      setShowMore(false);

      imageSlidePrev();
      let newIndex = pokeIndex - 1;
      setPokemonIndex(newIndex);
      imageSlidePrev();
    } else if (pokeIndex === 0 && offset > 0) {
      setShowMore(false);

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
    let stats = pokemon && pokemon.stats;
    return (
      <div className={`details-container ${showMore ? "open" : "close"}`}>
        <span className="poke-name">{pokemon.name}</span>
        <div className="stats-wrapper">
          {stats &&
            stats.map((stat) => (
              <div className="stats-row">
                <span className="">{stat.stat.name}</span>
                <span className="">{stat.base_stat}</span>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const showMoreDetails = (val) => {
    setShowMore(val);
  };

  const likePokemon = (id) => {
    let newLikes = [...likedList];
    if (likedList.includes(id)) {
      let index = newLikes.indexOf(id);
      newLikes.splice(index, 1);
      dispatch(setLikePokemon(newLikes));
    } else {
      newLikes = [...newLikes, id];
      dispatch(setLikePokemon(newLikes));
    }
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
                <div key={pokemon.id} className="display-container">
                  <div
                    onClick={() => likePokemon(pokemon.id)}
                    className="heart"
                  >
                    {likedList.length > 0 && likedList.includes(pokemon.id) ? (
                      <HeartFilled />
                    ) : (
                      <HeartEmpty />
                    )}
                  </div>
                  <img
                    alt={pokemon.name}
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
          <div onClick={() => showMoreDetails(true)} className="clickable">
            <div className="up" />
            <i className="info-arrow material-icons">keyboard_arrow_up</i>
          </div>
          <div onClick={() => showMoreDetails(false)} className="clickable">
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
