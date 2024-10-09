export type PokemonInfoModel = {
  count: number;
  next: string | null;
  previous: string | null;
};

export interface PokemonBaseModel {
  name: string;
  url: string;
}

export interface PokemonModel {
  id: number;
  image: string;
  name: string;
  types: Array<string>;
  isFavorite: boolean;
}

export interface Pokemon extends Omit<PokemonModel, "isFavorite"> {
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
