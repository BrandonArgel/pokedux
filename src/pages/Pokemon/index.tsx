import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, fetchPokemon } from "@slices";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@components";
import { pokemonTypesColors } from "@utils";

export const Pokemon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useParams<{ name: string }>();
  const { errorPokemon, loadingPokemon, pokemon } = useSelector(
    (state: RootState) => state.data,
    shallowEqual
  );

  console.log(pokemon);

  const { image, types, abilities } = pokemon || {};

  React.useEffect(() => {
    const initialRequest = () => {
      dispatch(fetchPokemon(String(name)));
    };

    initialRequest();
  }, [dispatch, name]);

  React.useEffect(() => {
    if (!loadingPokemon && pokemon === undefined) {
      navigate("/");
    }
  }, [loadingPokemon, pokemon, navigate]);

  if (loadingPokemon) {
    return <div>Loading...</div>;
  }

  if (errorPokemon) {
    return <div>{errorPokemon}</div>;
  }

  return (
    <>
      <img src={image} alt={pokemon?.name} />
      {types?.map((type) => (
        <Badge
          key={type}
          type={type}
          {...pokemonTypesColors[type as keyof typeof pokemonTypesColors]}
        />
      ))}
      {abilities?.map((ability) => (
        <p key={ability}>{ability}</p>
      ))}
    </>
  );
};
