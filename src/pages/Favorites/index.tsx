import * as React from "react";
import { AutoComplete, Typography } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@slices";
import { setFavorite } from "@slices/pokemonsSlice";
import { PokemonList } from "@containers";
import { GridCard } from "@components";
import { PokemonCardModel } from "@models";
import styles from "./Favorites.module.scss";

const { Title } = Typography;

export const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, favorites } = useSelector(
    (state: RootState) => state.data,
    shallowEqual
  );
  const { isDarkMode } = useSelector(
    (state: RootState) => state.ui,
    shallowEqual
  );

  const [search, setSearch] = React.useState<string>("");

  const handleFavorite = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    pokemon: PokemonCardModel
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setFavorite(pokemon));
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className={`${isDarkMode ? styles.favorites_dark : styles.favorites}`}>
      {favorites.length > 0 && (
        <AutoComplete
          allowClear
          filterOption={true}
          options={favorites.slice(0, 5).map((favorite) => ({
            value: favorite.name,
            label: favorite.name,
          }))}
          onSelect={handleSearch}
          onSearch={handleSearch}
          placeholder="Search in your favorite pokemons"
          size="large"
          style={{ width: "100%", marginBottom: "2rem" }}
          value={search}
        />
      )}
      <PokemonList loading={loading}>
        {favorites.length > 0 &&
          favorites
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map(({ id, name, image, types }: PokemonCardModel) => (
              <GridCard
                key={id}
                id={id}
                name={name}
                image={image}
                types={types}
                isFavorite={true}
                handleFavorite={handleFavorite}
              />
            ))}
      </PokemonList>
      {favorites.length === 0 ? (
        <Title level={3} style={{ textAlign: "center" }}>
          No favorite pokemons yet.
        </Title>
      ) : (
        favorites.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <Title
            level={3}
            style={{ textAlign: "center" }}
          >{`No results found for the search '${search}'`}</Title>
        )
      )}
    </div>
  );
};
