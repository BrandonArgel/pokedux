import { ActionTypePokemon } from "@state/action-types"
import { Action } from "@state/actions"
import { PokemonModel, PokemonInfoModel } from "@models"

type PokemonState = {
  pokemons: Array<PokemonModel>,
  favorite: Array<PokemonModel>,
  pokemon: PokemonModel | null,
  info: PokemonInfoModel | null,
  page: number,
  loading: boolean,
  error: string | null,
  search: string,
}

const changeLocalStoragePage = (page: number) => {
  localStorage.setItem('page', JSON.stringify(page))
}

const pageLS = JSON.parse(localStorage.getItem('page') ?? '1')

const updateFavoriteLS = (favorite: Array<PokemonModel>) => {
  localStorage.setItem('favorite', JSON.stringify(favorite))
}

const favoriteLS = JSON.parse(localStorage.getItem('favorite') ?? '[]')

const initialState: PokemonState = {
  pokemons: [],
  favorite: favoriteLS,
  pokemon: null,
  info: null,
  page: pageLS,
  loading: true,
  error: null,
  search: '',
}

export const pokemonsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypePokemon.SET_POKEMONS: {
      const pokemons = action.payload.map((pokemon) => {
        const isFavorite = state.favorite.some((favorite) => favorite.id === pokemon.id)
        return {
          ...pokemon,
          isFavorite,
        }
      })
      return {
        ...state,
        pokemons,
      }
    }
    case ActionTypePokemon.SET_FAVORITE: {
      const pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.id === action.payload.id) {
          return {
            ...pokemon,
            isFavorite: !pokemon.isFavorite,
          }
        }
        return pokemon
      })
      const isFavorite = state.favorite.some((favorite) => favorite.id === action.payload.id)
      if (isFavorite) {
        const favorite = state.favorite.filter((favorite) => favorite.id !== action.payload.id)
        updateFavoriteLS(favorite)
        return {
          ...state,
          favorite,
          pokemons,
        }
      }
      const favorite = [...state.favorite, action.payload]
      updateFavoriteLS(favorite)
      return {
        ...state,
        favorite,
      }
    }
    case ActionTypePokemon.SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      }
    case ActionTypePokemon.SET_INFO:
      return {
        ...state,
        info: action.payload,
      }
    case ActionTypePokemon.SET_PAGE:
      changeLocalStoragePage(action.payload)
      return {
        ...state,
        page: action.payload,
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
