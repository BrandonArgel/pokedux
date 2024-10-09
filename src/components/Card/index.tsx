import * as React from "react";
import { Card as AntCard, Image, Space } from "antd";
import { Link } from "react-router-dom";
import { Badge, StarButton } from "@components";
import styles from "./Card.module.scss";
import { pokemonTypesColors } from "@utils";
import { PokemonModel } from "@models";

interface CardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
  isFavorite: boolean;
  handleFavorite: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    pokemon: PokemonModel
  ) => void;
}

const cardColors = (pokemonTypes: string[], percentage: number) => {
  let background = "";
  if (pokemonTypes.length > 1) {
    background = `linear-gradient(0deg, ${pokemonTypes
      .map(
        (type) =>
          pokemonTypesColors[type as keyof typeof pokemonTypesColors].color +
          percentage
      )
      .join(", ")})`;
  } else
    background =
      pokemonTypesColors[pokemonTypes[0] as keyof typeof pokemonTypesColors]
        .color + percentage;

  return {
    background,
    color:
      pokemonTypesColors[pokemonTypes[0] as keyof typeof pokemonTypesColors]
        .color,
  };
};

export const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  types,
  isFavorite,
  handleFavorite,
}) => {
  const { background, color } = cardColors(types, 50);

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    handleFavorite(e, { id, name, image, types, isFavorite });
  };

  return (
    <AntCard className={styles.card} style={{ background, color }}>
      <Link to={`/pokemon/${name}`} className={styles.card__link}>
        <div className={styles.card__container}>
          <div className={styles.card__button}>
            <StarButton
              isFavorite={isFavorite}
              onClick={(e) => handleFavoriteClick(e)}
            />
          </div>
          <div className={styles.card__bg} style={{ background, color }}></div>
          <Image
            preview={false}
            rootClassName={styles.card__image}
            src={image}
            alt={name}
            width={475}
            height={475}
          />
        </div>
        <div className={styles.card__body}>
          <Space
            direction="vertical"
            align="center"
            className={styles.card__content}
          >
            <h3 className={styles.card__title} style={{ color }}>
              {name}
            </h3>
            <div className={styles.card__badges}>
              {types.map((type) => (
                <Badge
                  key={type}
                  type={type}
                  {...pokemonTypesColors[
                    type as keyof typeof pokemonTypesColors
                  ]}
                />
              ))}
            </div>
          </Space>
        </div>
      </Link>
    </AntCard>
  );
};
