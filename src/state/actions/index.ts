import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";

// ToDo: create model of pokemon
interface SetPokemonsAction {
  type: ActionTypePokemon.SET_POKEMONS
  payload: any
}

interface SetPokemonAction {
  type: ActionTypePokemon.SET_POKEMON
  payload: any
}

interface SetSearchAction {
  type: ActionTypePokemon.SET_SEARCH
  payload: string
}

interface SetLoadingAction {
  type: ActionTypePokemon.SET_LOADING
  payload: boolean
}

interface SetErrorAction {
  type: ActionTypePokemon.SET_ERROR
  payload: any
}

interface ToggleThemeAction {
  type: ActionTypeTheme.TOGGLE_THEME
}

export type Action = SetPokemonsAction | SetPokemonAction | SetSearchAction | SetLoadingAction | SetErrorAction | ToggleThemeAction;
