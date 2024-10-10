import { URL_API_BASE } from "@utils";
import pokemonNotFound from "@assets/images/pokemonNotFound.png";

export const getPokemonService = async (_name: string) => {
  _name = _name.toLowerCase();
  const { results } = await fetch(
    `${URL_API_BASE}pokemon?limit=100000&offset=0`
  ).then((response) => response.json());
  const pokemon = await fetch(`${URL_API_BASE}pokemon/${_name}`)
    .then((response) => response.json())
    .catch((error) => {
      const _err = error.message.match(/"([^"]+)"/)?.[1] ?? error.message;

      throw new Error(`Error getting pokemons: ${_err}`);
    });

  // Find the last pokemon id
  const lastId = results[results.length - 1].url.match(/\/(\d+)\//)?.[1];

  // Get previous and next pokemons
  const fetchPrevPokemon = async () => {
    let prevId = pokemon.id - 1;
    if (pokemon.id === 1) prevId = lastId;

    const prevPokemon = await fetch(`${URL_API_BASE}pokemon/${prevId}`)
      .then((response) => response.json())
      .catch(() => null);

    return prevPokemon;
  };

  const fetchNextPokemon = async () => {
    let nextId = pokemon.id + 1;
    if (pokemon.id === parseInt(lastId)) nextId = 1;

    const nextPokemon = await fetch(`${URL_API_BASE}pokemon/${nextId}`)
      .then((response) => response.json())
      .catch(() => null);

    return nextPokemon;
  };

  const [prev, next] = await Promise.all([
    fetchPrevPokemon(),
    fetchNextPokemon(),
  ]);

  const {
    abilities,
    base_experience,
    id,
    name,
    moves,
    sprites,
    stats,
    types,
    weight,
    height,
  } = pokemon;

  return {
    image:
      sprites.other["official-artwork"].front_default ??
      sprites.other.home.front_default ??
      sprites.front_default ??
      pokemonNotFound,
    types: types.map((type: any) => type.type.name),
    stats: stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    abilities: abilities.map((ability: any) => ability.ability.name),
    moves: moves.map((move: any) => move.move.name),
    base_experience,
    height,
    weight,
    name,
    id,
    isFavorite: false,
    prev: prev
      ? {
          name: prev.name,
          id: prev.id,
          types: prev.types.map((type: any) => type.type.name),
        }
      : null,
    next: next
      ? {
          name: next.name,
          id: next.id,
          types: next.types.map((type: any) => type.type.name),
        }
      : null,
  };
};
