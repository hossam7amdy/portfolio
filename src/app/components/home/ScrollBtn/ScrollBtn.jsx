import styles from "./ScrollBtn.module.css";
import { TfiMouse } from "react-icons/tfi";
import { TiArrowDown } from "react-icons/ti";

export const ScrollBtn = () => {
  return (
    <div className={styles.scroll}>
      <a href="#about" className={styles.link}>
        <TfiMouse className={styles.icon} size="2rem" />
        <span className={styles.text}>Scroll down</span>
        <TiArrowDown className={styles.icon} size="1.5rem" />
      </a>
    </div>
  );
};
