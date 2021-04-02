import { combineReducers } from "redux";
import pokedex from "./pokedex";
import pokeshop from "./pokeshop";
import pokepack from "./pokepack";
import pokeDetails from "./pokeDetails";

const reducers = combineReducers({ pokedex, pokeshop, pokepack, pokeDetails });

export default reducers;
