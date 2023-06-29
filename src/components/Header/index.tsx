import { Button, ConfigProvider, theme, Typography } from "antd";
import { Link } from "react-router-dom";
import { Moon, Sun } from "@assets/icons";
import styles from "./Header.module.scss";

interface Props {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const { useToken } = theme;
const { Title } = Typography;

export const Header: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
	const { token } = useToken();

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: token.colorBgBase,
				},
			}}
		>
			<header
				className={styles.header}
				style={{
					backgroundColor: token.colorBgBase,
				}}
			>
				<div className={styles.header__container}>
					<Link to={"/"} className={styles.header__logo}>
						<Title
							style={{
								color: token.colorPrimary,
								marginBottom: 0,
							}}
						>
							Pokedux
						</Title>
					</Link>
					<Button
						className={styles.header__button}
						onClick={() => toggleTheme()}
						style={{
							border: `2px solid ${token.colorText}`,
							fill: token.colorText,
						}}
						title="Toggle theme"
					>
						{isDarkMode ? <Sun color="#FFFF00" /> : <Moon color="#000000" />}
					</Button>
				</div>
			</header>
		</ConfigProvider>
	);
};
