import axios from "axios";
import { CATCH_POKEMON, FOUND_POKEMON } from "redux/types";
// import store from "redux/store";

export const getRandomPokemon = (id) => {
  return (dispatch) => {
    return axios
      .get(process.env.REACT_APP_API_HOST + "pokemon/" + id)
      .then((res) => {
        dispatch(setFoundPokemon(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const setFoundPokemon = (pokemon) => {
  return {
    type: FOUND_POKEMON,
    foundPokemon: pokemon,
  };
};

export const catchPokemon = (pokemon, isCaught) => {
  return {
    type: CATCH_POKEMON,
    isCaught: isCaught,
    caughtPokemon: pokemon,
  };
};

const initialState = {
  listItems: [],
  caughtPokemonList: [],
  isCaught: false,
  caughtPokemon: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FOUND_POKEMON:
      return {
        ...state,
        foundPokemon: action.foundPokemon,
      };
    case CATCH_POKEMON:
      return {
        ...state,
        isCaught: action.isCaught,
        caughtPokemon: action.caughtPokemon,
      };
    default:
      return state;
  }
}
