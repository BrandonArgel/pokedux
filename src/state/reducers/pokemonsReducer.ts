import { ActionTypePokemon } from "@state/action-types"
import { Action } from "@state/actions"

const initialState = {
  pokemons: [],
  pokemon: null,
  loading: false,
  error: null,
  search: '',
}

export const pokemonsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypePokemon.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      }
    case ActionTypePokemon.SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      }
    case ActionTypePokemon.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case ActionTypePokemon.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case ActionTypePokemon.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}