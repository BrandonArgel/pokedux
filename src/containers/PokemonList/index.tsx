import { Card } from "@components";
import styles from "./PokemonList.module.scss";

type PokemonListProps = {
	children: React.ReactNode;
	loading: boolean;
};

const defaultPokemon = {
	id: 1,
	name: "bulbasaur",
	image:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	types: ["grass", "poison"],
	isFavorite: false,
	handleFavorite: () => undefined,
};

export const PokemonList: React.FC<PokemonListProps> = ({ children, loading }) => {
	return (
		<div className={`${styles.list} ${loading ? styles.loading : ""}`}>
			{loading
				? Array.from({ length: 20 }).map((_, index) => <Card key={index} {...defaultPokemon} />)
				: children}
		</div>
	);
};
