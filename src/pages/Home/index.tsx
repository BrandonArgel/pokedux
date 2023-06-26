import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Pagination } from "antd";
import { actionCreators, State } from "@state";
import { PokemonList } from "@containers";
import { Card } from "@components";
import { PokemonModel } from "@models";
import { scrollTop } from "@utils";

export const Home = () => {
	const dispatch = useDispatch();
	const { info, loading, page, pokemons } = useSelector((state: State) => state.pokemons);
	const { getPokemons, setPage } = bindActionCreators(actionCreators, dispatch);
	
	const handlePageChange = (page: number) => {
		setPage(page);
		scrollTop();
	};

	React.useEffect(() => {
		getPokemons(page);
	}, [page]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<PokemonList loading={loading}>
				{pokemons.length &&
					pokemons.map((pokemon: PokemonModel) => (
						<Card key={pokemon.name} name={pokemon.name} image={pokemon.image} />
					))}
			</PokemonList>
			<Pagination
				current={page}
				defaultCurrent={1}
				defaultPageSize={20}
				pageSize={20}
				total={info?.count ?? 0}
				onChange={handlePageChange}
				showQuickJumper={false}
				showSizeChanger={false}
			/>
		</div>
	);
};
