import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";
import { themeReducer } from "./themeReducer";

export const reducers = combineReducers({
  pokemons: pokemonsReducer,
  theme: themeReducer,
});

export type State = ReturnType<typeof reducers>;