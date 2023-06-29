import styles from "./Badge.module.scss";

interface BadgeProps {
	type: string;
	icon: React.ReactNode;
	color: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, icon, color }) => (
	<p
		className={styles.badge}
		style={{
			color,
			backgroundColor: `${color}50`,
		}}
	>
		{icon} <span>{type}</span>
	</p>
);
