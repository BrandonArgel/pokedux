export type PokemonInfoModel = {
  count: number;
  next: string | null;
  previous: string | null;
};

export interface PokemonBaseModel {
  name: string;
  url: string;
}

export interface PokemonCardModel {
  id: number;
  image: string;
  name: string;
  types: Array<string>;
  isFavorite: boolean;
}

export type PokemonLinkModel = {
  name: string;
  id: number;
  types: Array<string>;
};

export interface PokemonModel extends PokemonCardModel {
  stats: Array<{
    name: string;
    value: number;
  }>;
  abilities: Array<string>;
  moves: Array<string>;
  weight: number;
  height: number;
  base_experience: number;
  prev: PokemonLinkModel | null;
  next: PokemonLinkModel | null;
}
