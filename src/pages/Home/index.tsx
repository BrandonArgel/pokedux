import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, fetchPokemons } from "@slices";
import { setFavorite, setPage } from "@slices/pokemonsSlice";
import { PokemonList } from "@containers";
import { Card, Pagination } from "@components";
import { PokemonModel } from "@models";
import { scrollTop } from "@utils";

export const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { info, loading, page, pokemons } = useSelector(
		(state: RootState) => state.data,
		shallowEqual
	);

	const handlePageChange = (page: number) => {
		dispatch(setPage(page));
		scrollTop();
	};

	const handleFavorite = (e: React.MouseEvent<HTMLElement, MouseEvent>, pokemon: PokemonModel) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(setFavorite(pokemon));
	};

	React.useEffect(() => {
		dispatch(fetchPokemons(page));
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
