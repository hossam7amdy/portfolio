import { useContext } from "react";
import { TabContext } from "../Tabs";
import styles from "./Panel.module.css";

export const Panel = ({ children, id }) => {
  const { activeTab } = useContext(TabContext);

  const active = activeTab === id ? styles.active : "";

  return (
    <li id={id} className={`${styles.panel} ${active}`}>
      {children}
    </li>
  );
};
