import { actionCreators } from "@state";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const Home = () => {
	const { pokemons, loading } = useSelector((state: any) => state.pokemons);
	const dispatch = useDispatch();
	const { getPokemons } = bindActionCreators(actionCreators, dispatch);

	React.useEffect(() => {
		getPokemons();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<h2>hello world</h2>
			{loading && <h2>Loading...</h2>}
			{pokemons.map((pokemon: any) => (
				<div key={pokemon.name}>
					<div key={pokemon.name}>{pokemon.name}</div>
					<img src={pokemon.image} alt={pokemon.name} />
				</div>
			))}
		</div>
	);
};
