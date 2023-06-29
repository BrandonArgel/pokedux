import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "@state";
import { PokemonList } from "@containers";
import { Card, Pagination } from "@components";
import { PokemonModel } from "@models";
import { scrollTop } from "@utils";

export const Home = () => {
	const dispatch = useDispatch();
	const { info, loading, page, pokemons } = useSelector((state: State) => state.pokemons);
	const { setFavorite, getPokemons, setPage } = bindActionCreators(actionCreators, dispatch);

	const handlePageChange = (page: number) => {
		setPage(page);
		scrollTop();
	};

	const handleFavorite = (e: React.MouseEvent<HTMLElement, MouseEvent>, pokemon: PokemonModel) => {
		e.preventDefault();
		e.stopPropagation();
		setFavorite(pokemon);
	};

	React.useEffect(() => {
		getPokemons(page);
	}, [page]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<PokemonList loading={loading}>
				{pokemons.length > 0 &&
					pokemons.map(({ id, name, image, types, isFavorite }: PokemonModel) => (
						<Card
							key={id}
							id={id}
							name={name}
							image={image}
							types={types}
							isFavorite={isFavorite}
							handleFavorite={handleFavorite}
						/>
					))}
			</PokemonList>
			<Pagination page={page} total={info?.count ?? 0} onChange={handlePageChange} />
		</div>
	);
};
