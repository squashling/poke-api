import axios from "axios";
import { SET_POKEMON, SET_LOADING_POKEMON } from "redux/types";

export const getPokemon = (offset) => {
  return (dispatch) => {
    dispatch(setLoadingPokemon(true));
    return axios
      .get(process.env.REACT_APP_API_HOST + "pokemon?limit=20&offset=" + offset)
      .then((res) => {
        console.log(res);
        let requests = res.data.results.map((item) => axios.get(item.url));
        Promise.all(requests)
          .then((values) => {
            console.log(values);
            let pokemon = values.map((item) => item.data);
            console.log(pokemon);
            dispatch(setPokemon(pokemon, offset));
            setTimeout(() => dispatch(setLoadingPokemon(false)), 200);
          })
          .catch((err) => {
            console.log(err);
            dispatch(setLoadingPokemon(false));
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingPokemon(false));
      });
  };
};

const setPokemon = (pokemon, offset) => {
  return {
    type: SET_POKEMON,
    pokemonList: pokemon,
    offset,
  };
};

export const setLoadingPokemon = (loading) => {
  return {
    type: SET_LOADING_POKEMON,
    loadingPokemon: loading,
  };
};

const initialState = {
  pokemonList: [],
  offset: 0,
  loadingPokemon: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemonList: action.pokemonList,
        offset: action.offset,
      };
    case SET_LOADING_POKEMON:
      return {
        ...state,
        loadingPokemon: action.loadingPokemon,
      };
    default:
      return state;
  }
}
