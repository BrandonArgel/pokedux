import { URL_API_BASE } from "@utils";
import pokemonNotFound from "@assets/images/pokemonNotFound.png";

export const getPokemonService = async (_name: string) => {
  const pokemon = await fetch(`${URL_API_BASE}pokemon/${_name}`)
    .then((response) => response.json())
    .catch((error) => {
      // Regex to return only the text inside "" from the error message
      const _err = error.message.match(/"([^"]+)"/)?.[1] ?? error.message;

      throw new Error(`Error getting pokemons: ${_err}`);
    });

  const {
    abilities,
    base_experience,
    height,
    id,
    moves,
    sprites,
    stats,
    types,
    weight,
  } = pokemon;

  return {
    ...pokemon,
    id,
    image:
      sprites.other["official-artwork"].front_default ??
      sprites.other.home.front_default ??
      sprites.front_shiny ??
      sprites.front_default ??
      pokemonNotFound,
    types: types.map((type: any) => type.type.name),
    stats: stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    abilities: abilities.map((ability: any) => ability.ability.name),
    moves: moves.map((move: any) => move.move.name),
    weight,
    height,
    base_experience,
  };
};
