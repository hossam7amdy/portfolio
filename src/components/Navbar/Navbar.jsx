import { CgClose } from "react-icons/cg";

import styles from "./Navbar.module.css";
import { NAV_LIST } from "../../data/data";

export const Navbar = ({ show, onClose }) => {
  const navClasses = `${styles.menu} ${show ? styles["show-menu"] : ""}`;

  return (
    <div className={navClasses}>
      <ul className={`${styles.list} grid`}>
        {NAV_LIST.map((navItem, idx) => (
          <li key={idx}>
            <a
              href={`#${navItem.name.toLowerCase()}`}
              className={styles.navLink}
              onClick={onClose}
            >
              <navItem.Icon className={styles.icon} />
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
      <button aria-label="close menu" onClick={onClose} className={styles.btn}>
        <CgClose className={styles["close-icon"]} />
      </button>
    </div>
  );
};
