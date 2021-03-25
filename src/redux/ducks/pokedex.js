import axios from "axios";

export default getPokemon = (page) => {
  return (dispatch) => {
    return axios
      .get()
      .then((res) => {
        console.log(res);
        dispatch(setPokemon());
      })
      .catch((err) => console.log(err));
  };
};

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
