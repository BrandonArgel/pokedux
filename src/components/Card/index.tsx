import * as React from "react";
import { Card as AntCard, Image, Space } from "antd";
import { Link } from "react-router-dom";
import { Badge, PokemonIcon, StarButton } from "@components";
import styles from "./Card.module.scss";
import { PokemonModel } from "@models";

interface CardProps {
	id: number;
	name: string;
	image: string;
	types: string[];
	isFavorite: boolean;
	handleFavorite: (event: React.MouseEvent<HTMLElement, MouseEvent>, pokemon: PokemonModel) => void;
}

const typesColors = {
	bug: { color: "#94BC4A", icon: <PokemonIcon letter="b" /> },
	ice: { color: "#70CBD4", icon: <PokemonIcon letter="i" /> },
	dark: { color: "#736C75", icon: <PokemonIcon letter="d" /> },
	fire: { color: "#EA7A3C", icon: <PokemonIcon letter="r" /> },
	rock: { color: "#B2A061", icon: <PokemonIcon letter="k" /> },
	water: { color: "#539AE2", icon: <PokemonIcon letter="w" /> },
	fairy: { color: "#E397D1", icon: <PokemonIcon letter="y" /> },
	ghost: { color: "#846AB6", icon: <PokemonIcon letter="h" /> },
	grass: { color: "#71C558", icon: <PokemonIcon letter="g" /> },
	steel: { color: "#89A1B0", icon: <PokemonIcon letter="m" /> },
	dragon: { color: "#6A7BAF", icon: <PokemonIcon letter="n" /> },
	flying: { color: "#7DA6DE", icon: <PokemonIcon letter="v" /> },
	ground: { color: "#CC9F4F", icon: <PokemonIcon letter="a" /> },
	normal: { color: "#AAB09F", icon: <PokemonIcon letter="c" /> },
	poison: { color: "#B468B7", icon: <PokemonIcon letter="o" /> },
	psychic: { color: "#E5709B", icon: <PokemonIcon letter="p" /> },
	fighting: { color: "#CB5F48", icon: <PokemonIcon letter="f" /> },
	electric: { color: "#E5C531", icon: <PokemonIcon letter="l" /> },
};

const cardColors = (pokemonTypes: string[], percentage: number) => {
	let background = "";
	if (pokemonTypes.length > 1) {
		background = `linear-gradient(0deg, ${pokemonTypes
			.map((type) => typesColors[type as keyof typeof typesColors].color + percentage)
			.join(", ")})`;
	} else background = typesColors[pokemonTypes[0] as keyof typeof typesColors].color + percentage;

	return {
		background,
		color: typesColors[pokemonTypes[0] as keyof typeof typesColors].color,
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

	const handleFavoriteClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		handleFavorite(e, { id, name, image, types, isFavorite });
	};

	return (
		<AntCard className={styles.card} style={{ background, color }}>
			<Link to={`/pokemon/${name}`} className={styles.card__link}>
				<div className={styles.card__container}>
					<div className={styles.card__button}>
						<StarButton isFavorite={isFavorite} onClick={(e) => handleFavoriteClick(e)} />
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
					<Space direction="vertical" align="center" className={styles.card__content}>
						<h3 className={styles.card__title} style={{ color }}>
							{name}
						</h3>
						<div className={styles.card__badges}>
							{types.map((type) => (
								<Badge key={type} type={type} {...typesColors[type as keyof typeof typesColors]} />
							))}
						</div>
					</Space>
				</div>
			</Link>
		</AntCard>
	);
};
