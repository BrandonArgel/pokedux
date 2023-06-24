import { getPokemonService, getPokemonsService } from "@services";
import { ActionTypePokemon, ActionTypeTheme } from "@state/action-types";
import { Dispatch } from "redux";
import { Action } from "@state/actions";
import { PokemonModel } from "@models";

export const getPokemons = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_LOADING,
      payload: true,
    })

    try {
      const pokemons = await getPokemonsService();
      dispatch({
        type: ActionTypePokemon.SET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      dispatch({
        type: ActionTypePokemon.SET_ERROR,
        payload: error,
      });
    }
  };
};

export const getPokemon = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
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
};

export const setPokemons = (pokemons: PokemonModel[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypePokemon.SET_POKEMONS,
      payload: pokemons,
    });
  };
};

export const setPokemon = (pokemon: PokemonModel) => {
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
