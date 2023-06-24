import { URL_API_BASE } from "@utils";
import pokemonNotFound from '@assets/images/pokemonNotFound.png';

export const getPokemonService = async (id: string) => {
  const pokemon = await fetch(`${URL_API_BASE}${id}`)
    .then((response) => response.json())

  const { sprites, types, stats, abilities, moves, weight, height, base_experience } = pokemon;

  return {
    id: pokemon.id,
    image: sprites.other['official-artwork'].front_default ?? sprites.other.home.front_default ?? sprites.front_shiny ?? sprites.front_default ?? pokemonNotFound,
    types: types.map((type: any) => type.type.name),
    stats: stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat
    })),
    abilities: abilities.map((ability: any) => ability.ability.name),
    moves: moves.map((move: any) => move.move.name),
    weight: weight,
    height: height,
    base_experience: base_experience,
    ...pokemon
  }
}