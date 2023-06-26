import styles from "./PokemonList.module.scss";

type PokemonListProps = {
	children: React.ReactNode;
};

export const PokemonList: React.FC<PokemonListProps> = ({ children }) => {
	return <div className={styles.list}>{children}</div>;
};
