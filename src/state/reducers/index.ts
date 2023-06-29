import { combineReducers } from "redux";
// import { pokemonsReducer } from "./pokemonsReducer";
import dataReducer from "@slices/pokemonsSlice";
import { themeReducer } from "./themeReducer";

export const reducers = combineReducers({
  pokemons: dataReducer,
  theme: themeReducer,
});

export type State = ReturnType<typeof reducers>;