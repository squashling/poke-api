import { combineReducers } from "redux";
import pokedex from "./pokedex";
import pokeshop from "./pokeshop";
import pokepack from "./pokepack";

const reducers = combineReducers({ pokedex, pokeshop, pokepack });

export default reducers;
