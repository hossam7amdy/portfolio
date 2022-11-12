import styles from "./ContactItem.module.css";

export const ContactItem = ({ Icon, title, subtitle }) => {
  return (
    <div className={styles.content}>
      <Icon className={styles.icon} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
