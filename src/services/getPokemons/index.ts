import { PokemonBaseModel } from "@models";
import { URL_API_BASE } from "@utils";
import pokemonNotFound from '@assets/images/pokemonNotFound.png';

export const getPokemonsService = async (page: number) => {
  const { count, next, results, previous } = await fetch(`${URL_API_BASE}pokemon/?limit=20&offset=${(page - 1) * 20}`)
    .then((response) => response.json())

  const pokemons = await Promise.all(
    results.map(async (pokemon: PokemonBaseModel) => {
      const { id, sprites, types } = await fetch(pokemon.url)
        .then((response) => response.json())

      return {
        id: id,
        image: sprites.other['official-artwork'].front_default ?? sprites.other.home.front_default ?? sprites.front_shiny ?? sprites.front_default ?? pokemonNotFound,
        types: types.map((type: any) => type.type.name),
        name: pokemon.name,
        isFavorite: false,
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