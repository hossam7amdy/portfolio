import styles from "./Section.module.css";

export const Section = ({ children, className, ...props }) => {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {children}
    </section>
  );
};
