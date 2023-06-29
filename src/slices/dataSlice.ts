import { PokemonInfoModel, PokemonModel } from '@models';
import { PokemonResponseModel } from '@models/Pokemon.model';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPokemonsService } from '@services';

export interface DataState {
  pokemons: Array<PokemonModel>;
  favorites: Array<PokemonModel>;
  pokemon: PokemonResponseModel | null;
  info: PokemonInfoModel | null;
  page: number;
  loading: boolean;
  error: string | null;
}

const changeLocalStoragePage = (page: number) => {
  localStorage.setItem('page', JSON.stringify(page));
}

const pageLS = JSON.parse(localStorage.getItem('page') ?? '1');

const updateFavoriteLS = (favorite: Array<PokemonModel>) => {
  localStorage.setItem('favorite', JSON.stringify(favorite));
}

const favoriteLS = JSON.parse(localStorage.getItem('favorite') ?? '[]');

const initialState: DataState = {
  pokemons: [],
  favorites: favoriteLS,
  pokemon: null,
  info: null,
  page: pageLS,
  loading: true,
  error: null,
}

export const fetchPokemons = createAsyncThunk(
  'data/fetchPokemons',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const { info, pokemons } = await getPokemonsService(1);
      dispatch(setPokemons(pokemons));
      dispatch(setInfo(info));
    } catch (error) {
      let errorMessage = 'Error getting pokemons';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  },
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Array<PokemonModel>>) => {
      const pokemons = action.payload.map((pokemon) => {
        const isFavorite = state.favorites.some((favorite) => favorite.id === pokemon.id)
        return {
          ...pokemon,
          isFavorite,
        }
      })
      state.pokemons = pokemons;
    },
    setFavorite: (state, action: PayloadAction<PokemonModel>) => {
      const isFavorite = state.favorites.some((favorite) => favorite.id === action.payload.id)
      if (isFavorite) {
        const favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id)
        updateFavoriteLS(favorites)
        state.favorites = favorites;
      } else {
        const favorite = [...state.favorites, action.payload]
        updateFavoriteLS(favorite)
        state.favorites = favorite;
      }
    },
    setPokemon: (state, action: PayloadAction<PokemonResponseModel>) => {
      state.pokemon = action.payload;
    },
    setInfo: (state, action: PayloadAction<PokemonInfoModel>) => {
      state.info = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      changeLocalStoragePage(action.payload)
      state.page = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
})

export const {
  setPokemons,
  setFavorite,
  setPokemon,
  setInfo,
  setPage,
  setLoading,
  setError,
} = dataSlice.actions;

export default dataSlice.reducer;