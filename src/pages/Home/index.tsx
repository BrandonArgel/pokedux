import { actionCreators, State } from "@state";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { PokemonList } from "@containers";
import { Card } from "@components";
import { PokemonModel } from "@models";

export const Home = () => {
	const dispatch = useDispatch();
	const { pokemons, loading } = useSelector((state: State) => state.pokemons);
	const { getPokemons } = bindActionCreators(actionCreators, dispatch);

	React.useEffect(() => {
		getPokemons();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			{loading && <h2>Loading...</h2>}
			<PokemonList>
				{pokemons.length &&
					pokemons.map((pokemon: PokemonModel) => (
						<Card key={pokemon.name} name={pokemon.name} image={pokemon.image} />
					))}
			</PokemonList>
		</div>
	);
};
