import { Card as AntCard, Image } from "antd";
import styles from "./Card.module.scss";
import React from "react";

interface CardProps {
	name: string;
	image: string;
}

export const Card: React.FC<CardProps> = ({ name, image }) => {
	return (
		<AntCard className={styles.card}>
			<Image rootClassName={styles.card__image} src={image} alt={name} width={475} height={475} />
			<h3>{name}</h3>
		</AntCard>
	);
};
