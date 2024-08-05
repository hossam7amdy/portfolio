import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.subtitle}>{subtitle}</span>
    </>
  );
};
