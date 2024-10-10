import styles from "./Loader.module.scss";
import { Pokeball } from "@assets/icons";

export const Loader = () => (
  <div className={styles.loader}>
    <Pokeball />
  </div>
);
