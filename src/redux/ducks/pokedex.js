import axios from "axios";
import { SET_POKEMON } from "redux/types";

export const getPokemon = (offset) => {
  return (dispatch) => {
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
            dispatch(setPokemon(pokemon));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

const setPokemon = (pokemon, offset) => {
  return {
    type: SET_POKEMON,
    pokemonList: pokemon,
    offset,
  };
};

const initialState = {
  pokemonList: [],
  offset: 40,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemonList: action.pokemonList,
      };
    default:
      return state;
  }
}
