import { getPokemonService, getPokemonsService } from "@services";
import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";
import { Dispatch } from "redux";
import { Action } from "@state/actions";
import { PokemonModel } from "@models";

export const getPokemons = (page: number) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_LOADING,
    payload: true,
  })

  try {
    const { info, pokemons } = await getPokemonsService(page);
    dispatch({
      type: ActionTypePokemon.SET_POKEMONS,
      payload: pokemons,
    });
    dispatch({
      type: ActionTypePokemon.SET_INFO,
      payload: info,
    });
  } catch (error) {
    dispatch({
      type: ActionTypePokemon.SET_ERROR,
      payload: error,
    });
  } finally {
    dispatch({
      type: ActionTypePokemon.SET_LOADING,
      payload: false,
    });
  }
};

export const setFavorite = (pokemon: PokemonModel) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_FAVORITE,
    payload: pokemon,
  });
}

export const getPokemon = (id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_LOADING,
    payload: true,
  });

  try {
    const pokemon = await getPokemonService(id);
    dispatch({
      type: ActionTypePokemon.SET_POKEMON,
      payload: pokemon,
    });
  }
  catch (error) {
    dispatch({
      type: ActionTypePokemon.SET_ERROR,
      payload: error,
    });
  }

};


export const setPokemons = (pokemons: PokemonModel[]) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_POKEMONS,
    payload: pokemons,
  });
};

export const setPokemon = (pokemon: PokemonModel) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_POKEMON,
    payload: pokemon,
  });
};


export const setPage = (page: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_PAGE,
    payload: page,
  });
};


export const setSearch = (search: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_SEARCH,
    payload: search,
  });
};


export const setLoading = (loading: boolean) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_LOADING,
    payload: loading,
  });
};


export const setError = (error: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypePokemon.SET_ERROR,
    payload: error,
  });
};


export const toggleTheme = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypeTheme.TOGGLE_THEME,
  });
};

