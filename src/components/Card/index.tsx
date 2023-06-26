import { Card as AntCard, Image, Skeleton, Space } from "antd";
import styles from "./Card.module.scss";
import React from "react";

interface CardProps {
	name: string;
	image: string;
}

export const Card: React.FC<CardProps> = ({ name, image }) => {
	return (
		<AntCard className={styles.card}>
			<Image
				preview={false}
				rootClassName={styles.card__image}
				src={image}
				alt={name}
				width={475}
				height={475}
			/>
			<div className={styles.card__body}>
				<h3>{name}</h3>
			</div>
		</AntCard>
	);
};

export const CardSkeleton: React.FC = () => {
	return (
		<AntCard className={styles.skeleton}>
			<Skeleton.Image className={styles.skeleton__image} active />
			<div className={styles.skeleton__body}>
				<Skeleton className={styles.skeleton__title} active paragraph={{ rows: 0 }} />
				<Space className={styles.skeleton__text}>
					<Skeleton.Button active size="small" block />
					<Skeleton.Button active size="small" block />
				</Space>
			</div>
		</AntCard>
	);
};
