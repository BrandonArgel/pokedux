import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";
import { PokemonModel } from "@models";


interface SetPokemonsAction {
  type: ActionTypePokemon.SET_POKEMONS
  payload: Array<PokemonModel>
}

interface SetPokemonAction {
  type: ActionTypePokemon.SET_POKEMON
  payload: PokemonModel
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
