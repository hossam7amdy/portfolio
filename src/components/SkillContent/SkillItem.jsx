import styles from "./SkillItem.module.css";

export const SkillItem = ({ name, progress }) => {
  return (
    <li className={styles.data}>
      <div className={styles.title}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.progress}>{progress}%</span>
      </div>
      <div className={styles.bar}>
        <span
          className={styles.percentage}
          style={{ width: progress + "%" }}
        ></span>
      </div>
    </li>
  );
};
