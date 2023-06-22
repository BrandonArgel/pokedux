import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";
import { Dispatch } from "redux";
import { Action } from "@state/actions";

export const setPokemons = (pokemons: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_POKEMONS,
      payload: pokemons,
    });
  };
};

export const setPokemon = (pokemon: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_POKEMON,
      payload: pokemon,
    });
  };
};

export const setSearch = (search: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_SEARCH,
      payload: search,
    });
  };
};

export const setLoading = (loading: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_LOADING,
      payload: loading,
    });
  };
};

export const setError = (error: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_ERROR,
      payload: error,
    });
  };
};

export const toggleTheme = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypeTheme.TOGGLE_THEME,
    });
  };
};
