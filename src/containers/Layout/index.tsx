import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "@state";
import { Header, Footer } from "@components";
import styles from "./Layout.module.scss";

const darkTheme = {
	token: {
		colorBgBase: "#38304c",
		colorBgContainer: "#201a30",
		colorPrimary: "#0df5e3",
		colorText: "#ebebeb",
		colorTextBase: "#696574",
		colorTextLightSolid: "white",
	},
};
const lightTheme = {
	token: {
		colorBgBase: "white",
		colorBgContainer: "#f5f5f5",
		colorPrimary: "blue",
		colorText: "black",
		colorTextBase: "black",
		colorTextLightSolid: "black",
	},
};

export const Layout = () => {
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector((state: State) => state.theme);
	const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	return (
		<ConfigProvider theme={currentTheme}>
			<div
				className={styles.root}
				style={{
					backgroundColor: currentTheme.token.colorBgContainer,
				}}
			>
				<Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
				<main
					style={{
						color: currentTheme.token.colorText,
					}}
				>
					<Outlet />
				</main>
				<Footer />
			</div>
		</ConfigProvider>
	);
};
