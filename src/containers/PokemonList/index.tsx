import { GridCard } from "@components";
import { defaultPokemon } from "@utils";
import styles from "./PokemonList.module.scss";

type PokemonListProps = {
  children: React.ReactNode;
  loading: boolean;
};

export const PokemonList: React.FC<PokemonListProps> = ({
  children,
  loading,
}) => {
  return (
    <div className={`${styles.list} ${loading ? styles.loading : ""}`}>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <GridCard key={index} {...defaultPokemon} />
          ))
        : children}
    </div>
  );
};
