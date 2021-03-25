import axios from "axios";
import { SET_POKEMON } from "redux/types";

export const getPokemon = (page) => {
  return (dispatch) => {
    return axios
      .get(process.env.REACT_APP_API_HOST + "pokemon?limit=100&offset=200")
      .then((res) => {
        console.log(res);
        dispatch(setPokemon());
      })
      .catch((err) => console.log(err));
  };
};

const setPokemon = (pokemon) => {
  return {
    type: SET_POKEMON,
    pokemonList: pokemon,
  };
};

const initialState = {
  pokemonList: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
