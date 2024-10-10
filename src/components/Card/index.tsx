import * as React from "react";
import { Card as AntCard, Image, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Badge, StarButton } from "@components";
import { cardColors, pokemonTypeColors } from "@utils";
import { PokemonCardModel } from "@models";
import styles from "./Card.module.scss";

interface GridCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
  isFavorite: boolean;
  handleFavorite: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    pokemon: PokemonCardModel
  ) => void;
}

const { Text, Title } = Typography;

export const GridCard: React.FC<GridCardProps> = ({
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
    <AntCard className={styles.gridCard} style={{ background, color }}>
      <Link to={`/pokemon/${name}`} className={styles.gridCard__link}>
        <div className={styles.gridCard__container}>
          <div className={styles.gridCard__button}>
            <StarButton
              isFavorite={isFavorite}
              onClick={(e) => handleFavoriteClick(e)}
              color={color}
            />
          </div>
          <div
            className={styles.gridCard__bg}
            style={{ background, color }}
          ></div>
          <Image
            preview={false}
            rootClassName={styles.gridCard__image}
            src={image}
            alt={name}
            width={475}
            height={475}
          />
        </div>
        <div className={styles.gridCard__body}>
          <Space
            direction="vertical"
            align="center"
            className={styles.gridCard__content}
          >
            <Text className={styles.gridCard__id}>
              No.° {id}
            </Text>
            <Title
              level={3}
              className={styles.gridCard__title}
              style={{ color }}
            >
              {name}
            </Title>
            <div className={styles.gridCard__badges}>
              {types.map((type) => (
                <Badge
                  key={type}
                  type={type}
                  {...pokemonTypeColors[type as keyof typeof pokemonTypeColors]}
                />
              ))}
            </div>
          </Space>
        </div>
      </Link>
    </AntCard>
  );
};

export const Card: React.FC<GridCardProps> = ({
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
      <div className={styles.card__body}>
        <Space
          direction="horizontal"
          align="center"
          className={styles.card__header}
        >
          <div>
            <Title
              level={3}
              className={styles.card__title}
              style={{ color, margin: 0 }}
            >
              {name}
            </Title>
            <Text className={styles.card__id}>
              No.° {id}
            </Text>
          </div>
          <div className={styles.card__button}>
            <StarButton
              isFavorite={isFavorite}
              onClick={(e) => handleFavoriteClick(e)}
              color={color}
            />
          </div>
        </Space>
      </div>
      <div className={styles.card__container}>
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
          <div className={styles.card__badges}>
            {types.map((type) => (
              <Badge
                key={type}
                type={type}
                {...pokemonTypeColors[type as keyof typeof pokemonTypeColors]}
              />
            ))}
          </div>
        </Space>
      </div>
    </AntCard>
  );
};
