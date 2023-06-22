import { Button } from "antd";
import { Moon, Sun } from "@assets/icons";

interface Props {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

export const Header: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
	return (
		<div>
			<h1>Pokedux</h1>
			<Button type="primary" onClick={() => toggleTheme()}>
				{isDarkMode ? <Sun /> : <Moon />}
			</Button>
		</div>
	);
};
