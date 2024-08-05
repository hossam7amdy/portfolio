import { CSSTransition } from "react-transition-group";

import { Card } from "../../Card/Card";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({ header, body, onClose, isOpen }) => {
  const classes = {
    enter: "",
    enterActive: styles.modalOpen,
    exit: "",
    exitActive: styles.modalClosed,
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isOpen}
      timeout={400}
      classNames={classes}
    >
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{header}</h2>
        </header>
        <div className={styles.body}>{body}</div>
        <footer className={styles.actions}>
          <button className={styles.btn} onClick={onClose}>
            Close
          </button>
        </footer>
      </Card>
    </CSSTransition>
  );
};
