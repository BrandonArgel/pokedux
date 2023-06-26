import { CardSkeleton } from "@components";
import styles from "./PokemonList.module.scss";

type PokemonListProps = {
	children: React.ReactNode;
	loading: boolean;
};

export const PokemonList: React.FC<PokemonListProps> = ({ children, loading }) => {
	return <div className={styles.list}>
		{loading ? Array.from({ length: 20 }).map((_, index) => <CardSkeleton key={index} />) : children}
	</div>;
};
