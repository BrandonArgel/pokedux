import * as React from "react";
import { Button, theme, Typography } from "antd";
import { Link } from "react-router-dom";
import { Logo } from "@components";
import { Moon, Sun } from "@assets/icons";
import { KEY_CODES } from "@utils";
import styles from "./Header.module.scss";

interface Props {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const { useToken } = theme;
const { Title, Text } = Typography;

export const Header: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
  const { token } = useToken();
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>;
  const asideRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  type Focusables = HTMLButtonElement | HTMLAnchorElement;

  let menuFocusables: Focusables[] = [];
  let firstFocusableEl: Focusables | null = null;
  let lastFocusableEl: Focusables | null = null;

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(asideRef.current.querySelectorAll("a")),
    ];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl && lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl && firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE: {
        setIsOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    setFocusables();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  const buttonTheme = (
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
  );

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: token.colorBgBase,
      }}
    >
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
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__item}>
            <Link
              className={styles.header__link}
              to={"/"}
              style={{
                color: token.colorText,
              }}
            >
              <Text>Pokedux</Text>
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link
              className={styles.header__link}
              to={"/favorites"}
              style={{
                color: token.colorText,
              }}
            >
              <Text>Favorites</Text>
            </Link>
          </li>
          <li>{buttonTheme}</li>
        </ul>
      </nav>
      <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        className={`${styles.header__hamburger} ${
          isOpen ? styles.header__hamburger_active : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
        style={{
          stroke: token.colorPrimary,
        }}
      >
        <svg height="32" width="32">
          <line
            className={styles.header__hamburger_top}
            x1="10%"
            y1="20%"
            x2="50%"
            y2="20%"
          />
          <line
            className={styles.header__hamburger_middle}
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
          />
          <line
            className={styles.header__hamburger_bottom}
            x1="50%"
            y1="80%"
            x2="90%"
            y2="80%"
          />
        </svg>
      </button>
      <aside
        ref={asideRef}
        className={`${styles.header__menu} ${
          isOpen ? styles.header__menu_open : ""
        }`}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 1 : -1}
        style={{
          backgroundColor: token.colorBgContainer,
          color: token.colorText,
        }}
      >
        <nav>
          <ul className={styles.header__menu_list}>
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  color: token.colorText,
                }}
                to={"/"}
              >
                <Text>Pokedux</Text>
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  color: token.colorText,
                }}
                to={"/favorites"}
              >
                <Text>Favorites</Text>
              </Link>
            </li>
            <li>{buttonTheme}</li>
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.header__backdrop}
        ></button>
      )}
    </header>
  );
};
