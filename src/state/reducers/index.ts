import { combineReducers } from "redux";
// import { pokemonsReducer } from "./pokemonsReducer";
import dataReducer from "@slices/dataSlice";
import { themeReducer } from "./themeReducer";

export const reducers = combineReducers({
  pokemons: dataReducer,
  theme: themeReducer,
});

export type State = ReturnType<typeof reducers>;