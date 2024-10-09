import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@slices/uiSlice";
import { RootState } from "@slices";
import { Header, Footer } from "@components";
import styles from "./Layout.module.scss";

const darkTheme = {
  token: {
    colorBgBase: "#38304c",
    colorBgContainer: "#201a30",
    colorPrimary: "#b468b7",
    colorText: "#ebebeb",
    colorTextBase: "#696574",
    colorTextLightSolid: "white",
  },
};
const lightTheme = {
  token: {
    colorBgBase: "white",
    colorBgContainer: "#f5f5f5",
    colorPrimary: "rebeccapurple",
    colorText: "black",
    colorTextBase: "black",
    colorTextLightSolid: "black",
  },
};

export const Layout = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(
    (state: RootState) => state.ui,
    shallowEqual
  );
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ConfigProvider theme={currentTheme}>
      <div
        className={styles.root}
        style={{
          backgroundColor: currentTheme.token.colorBgContainer,
        }}
      >
        <Header isDarkMode={isDarkMode} toggleTheme={handleToggleTheme} />
        <main
					className={styles.main}
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
