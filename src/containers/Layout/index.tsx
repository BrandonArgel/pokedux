import { Outlet } from "react-router-dom";
import { Layout as AntLayout, Space } from "antd";
import { ConfigProvider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "@state";
import { Header, Footer } from "@components";
import styles from "./Layout.module.scss";

const { Header: AntHeader, Footer: AntFooter, Content } = AntLayout;
const darkTheme = {
	colorBgBase: "black",
	colorPrimaryBg: "black",
	colorBgContainer: "black",
	colorPrimary: "red",
	colorTextBase: "white",
	colorTextLightSolid: "white",
};
const lightTheme = {
	colorBgBase: "white",
	colorBgContainer: "white",
	colorPrimaryBg: "white",
	colorPrimary: "blue",
	colorTextBase: "black",
	colorTextLightSolid: "black",
};

export const Layout = () => {
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector((state: State) => state.theme);
	const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

	const theme = isDarkMode ? darkTheme : lightTheme;


	return (
		<ConfigProvider theme={{
			token: theme,
		}}>
			<Space direction="vertical" className={styles.root}>
				<AntLayout>
					<AntHeader>
						<Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
					</AntHeader>
					<Content>
						<Outlet />
					</Content>
					<AntFooter>
						<Footer />
					</AntFooter>
				</AntLayout>
			</Space>
		</ConfigProvider>
	);
};
