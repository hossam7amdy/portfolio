import { IoCalendarOutline } from "react-icons/io5";

import styles from "./QualificationItem.module.css";

export const QualificationItem = ({ title, subtitle, date, trackOnLeft }) => {
  return (
    <div className={styles.content}>
      {trackOnLeft && <div></div>}

      {trackOnLeft && (
        <div>
          <span className={styles.rounder}></span>
          <span className={styles.line}></span>
        </div>
      )}

      <div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{subtitle}</span>
        <div className={styles.date}>
          <IoCalendarOutline /> {date}
        </div>
      </div>

      {!trackOnLeft && (
        <div>
          <span className={styles.rounder}></span>
          <span className={styles.line}></span>
        </div>
      )}
    </div>
  );
};
