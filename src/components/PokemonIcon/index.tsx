import styles from "./PokemonIcon.module.scss";

type PokemonIconLetter =
	| "b"
	| "i"
	| "d"
	| "r"
	| "k"
	| "w"
	| "y"
	| "h"
	| "g"
	| "m"
	| "n"
	| "v"
	| "a"
	| "c"
	| "o"
	| "p"
	| "f"
	| "l";

interface PokemonIconProps {
	letter: PokemonIconLetter;
}

export const PokemonIcon: React.FC<PokemonIconProps> = ({ letter }) => (
	<span className={styles.icon}>{letter}</span>
);
