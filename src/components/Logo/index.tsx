import { Pokeball } from "@assets/icons";
import { theme } from "antd";
import styles from "./Logo.module.scss";

const { useToken } = theme;

export const Logo = () => {
  const { token } = useToken();

  return (
    <div className={styles.logo}>
      <Pokeball
        primary={token?.colorPrimary}
        secondary="white"
        border="black"
      />
    </div>
  );
};
