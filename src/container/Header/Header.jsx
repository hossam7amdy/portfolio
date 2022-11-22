import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";

import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher/ColorModeSwitcher";

export const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo}>
        <img src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        <Navbar show={show} onClose={() => setShow(false)} />
        <div className={styles.icons}>
          <ColorModeSwitcher className={styles["toggle-icon"]} />
          <button
            aria-label="show nav menu"
            onClick={() => setShow(true)}
            className={styles["menu-btn"]}
          >
            <AiOutlineAppstore className={styles["toggle-icon"]} />
          </button>
        </div>
      </nav>
    </header>
  );
};
