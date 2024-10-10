export {
  default as dataReducer,
  fetchPokemon,
  fetchPokemons,
} from "./pokemonsSlice";
export { default as uiReducer } from "./uiSlice";
export type { RootState, AppDispatch } from "./store";
export { default as store, useAppDispatch } from "./store";
