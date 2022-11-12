import styles from "./TabList.module.css";

export const TabList = ({ children }) => {
  return <ul className={styles.tabList}>{children}</ul>;
};
