import { PokemonBaseModel } from "@models";
import { URL_API_BASE } from "@utils";
import pokemonNotFound from '@assets/images/pokemonNotFound.png';

export const getPokemonsService = async (page: number) => {
  const { count, next, results, previous } = await fetch(`${URL_API_BASE}?limit=20&offset=${(page - 1) * 20}`)
    .then((response) => response.json())

  const pokemons = await Promise.all(
    results.map(async (pokemon: PokemonBaseModel) => {
      const { id, sprites, types, stats, abilities, moves, weight, height } = await fetch(pokemon.url)
        .then((response) => response.json())

      return {
        id: id,
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
        ...pokemon
      }
    })
  )

  const info = {
    count,
    next,
    previous
  }

  return { info, pokemons }
}