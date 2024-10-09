import { Button, ConfigProvider, theme, Typography } from "antd";
import { Link } from "react-router-dom";
import { Logo } from "@components";
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
    <ConfigProvider>
      <header
        className={styles.header}
        style={{
          backgroundColor: token.colorBgBase,
        }}
      >
        <div className={styles.header__container}>
          <Link to={"/"} className={styles.header__logo}>
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                marginBottom: 0,
              }}
            >
              Pokedux
            </Title>
            <Logo />
          </Link>
          <div className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <Link
                  className={styles.header__link}
                  to={"/favorites"}
                  style={{
                    color: token.colorText,
                  }}
                >
                  Favorites
                </Link>
              </li>
            </ul>
            <Button
              className={styles.header__button}
              onClick={() => toggleTheme()}
              style={{
                border: `2px solid ${token.colorText}`,
                fill: token.colorText,
              }}
              title="Toggle theme"
            >
              {isDarkMode ? (
                <Sun color={token.colorPrimary} />
              ) : (
                <Moon color={token.colorPrimary} />
              )}
            </Button>
          </div>
        </div>
      </header>
    </ConfigProvider>
  );
};
