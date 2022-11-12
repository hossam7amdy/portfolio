import { Card } from "../Card/Card";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({ header, body, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{header}</h2>
      </header>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
      <footer className={styles.actions}>
        <button className={styles.btn} onClick={onConfirm}>
          Close
        </button>
      </footer>
    </Card>
  );
};
