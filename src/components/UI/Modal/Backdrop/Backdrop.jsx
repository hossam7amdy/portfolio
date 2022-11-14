import styles from "./Backdrop.module.css";

export const Backdrop = ({ onClose, isOpen }) => {
  const cssClasses = `${styles.backdrop} ${
    isOpen ? styles.BackdropOpen : styles.BackdropClosed
  }`;

  return isOpen ? <div className={cssClasses} onClick={onClose}></div> : null;
};
