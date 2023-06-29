import { Button, theme } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import styles from "./StarButton.module.scss";

interface StarButtonProps {
	isFavorite: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const { useToken } = theme;

export const StarButton: React.FC<StarButtonProps> = ({ isFavorite, onClick }) => {
	const Icon = isFavorite ? StarFilled : StarOutlined;
	const { token } = useToken();

	return (
		<Button
			className={styles.button}
			shape="circle"
			icon={<Icon />}
			onClick={onClick}
			style={{
				color: isFavorite ? token.colorPrimary : "",
			}}
		/>
	);
};
