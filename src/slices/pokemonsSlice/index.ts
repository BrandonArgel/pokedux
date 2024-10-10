import { PokemonInfoModel, PokemonModel, PokemonCardModel } from "@models";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPokemonService, getPokemonsService } from "@services";
import { capitalize } from "@utils/capitalize";
import { showErrorMessage, showSuccessMessage } from "@utils/showMessage";

export interface DataState {
  pokemon: PokemonModel | null;
  pokemons: Array<PokemonCardModel>;
  favorites: Array<PokemonCardModel>;
  info: PokemonInfoModel | null;
  page: number;
  loading: boolean;
  loadingPokemon: boolean;
  error: string | null;
  errorPokemon: string | null;
}

const changeLocalStoragePage = (page: number) => {
  localStorage.setItem("page", JSON.stringify(page));
};

const pageLS = JSON.parse(localStorage.getItem("page") ?? "1");

const updateFavoriteLS = (favorite: Array<PokemonCardModel>) => {
  localStorage.setItem("favorite", JSON.stringify(favorite));
};

const favoriteLS = JSON.parse(localStorage.getItem("favorite") ?? "[]");

const initialState: DataState = {
  pokemon: null,
  pokemons: [],
  favorites: favoriteLS,
  info: null,
  page: pageLS,
  loading: true,
  loadingPokemon: true,
  error: null,
  errorPokemon: null,
};

export const fetchPokemons = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  number
>("data/fetchPokemons", async (page, { dispatch }) => {
  dispatch(setError(null));
  dispatch(setLoading(true));
  try {
    const { info, pokemons } = await getPokemonsService(page);
    dispatch(setPokemons(pokemons));
    dispatch(setInfo(info));
  } catch (error) {
    let errorMessage = "Error getting pokemons";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(setError(errorMessage));
  } finally {
    dispatch(setLoading(false));
  }
});

export const fetchPokemon = createAsyncThunk<void, string>(
  "data/fetchPokemon",
  async (name, { dispatch }) => {
    dispatch(setErrorPokemon(null));
    dispatch(setLoadingPokemon(true));
    try {
      const pokemon = await getPokemonService(name);
      dispatch(setPokemon(pokemon));
    } catch (error) {
      let errorMessage = "Error getting pokemons";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(setErrorPokemon(errorMessage));
    } finally {
      dispatch(setLoadingPokemon(false));
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Array<PokemonCardModel>>) => {
      const pokemons = action.payload.map((pokemon) => {
        const isFavorite = state.favorites.some(
          (favorite) => favorite.id === pokemon.id
        );
        return {
          ...pokemon,
          isFavorite,
        };
      });
      state.pokemons = pokemons;
    },
    setPokemon: (state, action: PayloadAction<PokemonModel>) => {
      const isFavorite = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      state.pokemon = {
        ...action.payload,
        isFavorite,
      };
    },
    setFavorite: (state, action: PayloadAction<PokemonCardModel>) => {
      const { id, name } = action.payload;
      const isFavorite = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (isFavorite) {
        const favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
        updateFavoriteLS(favorites);
        state.favorites = favorites;
      } else {
        const favorite = [...state.favorites, action.payload];
        updateFavoriteLS(favorite);
        state.favorites = favorite;
      }

      const pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.id === action.payload.id) {
          return {
            ...pokemon,
            isFavorite: !pokemon.isFavorite,
          };
        }
        return pokemon;
      });
      state.pokemons = pokemons;
      state.pokemon !== null && (state.pokemon.isFavorite = !isFavorite);

      showSuccessMessage({
        title: `Pokemon #${id}: ${capitalize(name)} ${
          isFavorite ? "removed from" : "added to"
        } favorites`,
      });
    },
    setInfo: (state, action: PayloadAction<PokemonInfoModel>) => {
      state.info = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      changeLocalStoragePage(action.payload);
      state.page = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingPokemon: (state, action: PayloadAction<boolean>) => {
      state.loadingPokemon = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;

      if (action.payload) {
        showErrorMessage({ title: action.payload });
      }
    },
    setErrorPokemon: (state, action: PayloadAction<string | null>) => {
      state.errorPokemon = action.payload;

      if (action.payload) {
        showErrorMessage({ title: action.payload });
      }
    },
  },
});

export const {
  setPokemon,
  setPokemons,
  setFavorite,
  setInfo,
  setPage,
  setLoading,
  setLoadingPokemon,
  setError,
  setErrorPokemon,
} = dataSlice.actions;

export default dataSlice.reducer;
