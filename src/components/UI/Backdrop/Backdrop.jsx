import styles from "./Backdrop.module.css";

export const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};
