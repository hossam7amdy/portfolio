import { useContext } from "react";

import styles from "./Tab.module.css";
import { TabContext } from "../Tabs";

export const Tab = ({ children, id }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const active = id === activeTab ? styles.active : "";

  return (
    <li>
      <button
        aria-label="tab"
        className={`${styles.tab} ${active}`}
        onClick={() => setActiveTab(id)}
      >
        {children}
      </button>
    </li>
  );
};
