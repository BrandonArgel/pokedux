export {
  default as dataReducer,
  fetchPokemon,
  fetchPokemons,
} from "./pokemonsSlice";
export { default as uiRedycer } from "./uiSlice";
export type { RootState, AppDispatch } from "./store";
export { default as store, useAppDispatch } from "./store";
