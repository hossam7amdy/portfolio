import styles from "./ContactItem.module.css";

const hrefUrl = (name, contact) => {
  if (name === "Contact Me") {
    return `tel:${contact}`;
  } else if (name === "Email") {
    return `mailto:${contact}`;
  }
  return "#contactme";
};

export const ContactItem = ({ Icon, title, subtitle }) => {
  return (
    <div className={styles.content}>
      <Icon className={styles.icon} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <a className={styles.link} href={hrefUrl(title, subtitle)}>
          {subtitle}
        </a>
      </div>
    </div>
  );
};
