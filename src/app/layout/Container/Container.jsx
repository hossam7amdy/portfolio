import styles from "./Container.module.css";

export const Container = ({ children, centerContent, className, ...props }) => {
  const center = centerContent ? styles.center : "";

  return (
    <div className={`${styles.container} ${className} ${center}`} {...props}>
      {children}
    </div>
  );
};
