import { combineReducers } from "redux";
import pokedex from "./pokedex";
import pokeshop from "./pokeshop";

const reducers = combineReducers({ pokedex, pokeshop });

export default reducers;
