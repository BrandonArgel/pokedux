export interface PokemonBaseModel {
  name: string;
  url: string;
}

interface PokemonStatsModel {
  name: string;
  value: number;
}

export interface PokemonResponseModel {
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

export interface PokemonModel {
  id: number;
  image: string;
  name: string;
  types: Array<string>;
  stats: Array<PokemonStatsModel>;
  abilities: Array<string>;
  moves: Array<string>;
  weight: number;
  height: number;
}

