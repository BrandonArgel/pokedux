export interface PokemonBaseModel {
  name: string;
  url: string;
}

export interface PokemonModel extends PokemonBaseModel {
  id: number;
  image: string;
  types: Array<string>;
  stats: Array<{
    name: string;
    value: number;
  }>;
  abilities: Array<string>;
  moves: Array<string>;
  weight: number;
  height: number;
  base_experience: number;
}