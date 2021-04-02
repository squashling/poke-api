import axios from "axios";

const initialState = {
  listItems: [
    { id: 1, name: "charmander" },
    { id: 2, name: "charizard" },
    { id: 3, name: "pikachu" },
    { id: 4, name: "raychu" },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
