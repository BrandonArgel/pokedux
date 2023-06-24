import { PokemonModel } from './Pokemon.model';

export type ResponseModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonModel>;
}