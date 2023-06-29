import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";
import { PokemonInfoModel, PokemonModel } from "@models";


interface SetPokemonsAction {
  type: ActionTypePokemon.SET_POKEMONS
  payload: Array<PokemonModel>
}

interface SetFavoriteAction {
  type: ActionTypePokemon.SET_FAVORITE
  payload: PokemonModel
}

interface SetPokemonAction {
  type: ActionTypePokemon.SET_POKEMON
  payload: PokemonModel
}

interface SetInfoAction {
  type: ActionTypePokemon.SET_INFO
  payload: PokemonInfoModel
}

interface SetPageAction {
  type: ActionTypePokemon.SET_PAGE
  payload: number
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

export type Action = SetPokemonsAction | SetFavoriteAction | SetPokemonAction | SetInfoAction | SetPageAction | SetSearchAction | SetLoadingAction | SetErrorAction | ToggleThemeAction;
