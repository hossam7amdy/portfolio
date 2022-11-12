import styles from "./IconLink.module.css";

export const IconLink = ({
  to,
  Icon,
  text,
  isExternal,
  className,
  ...props
}) => {
  const external = () => {
    if (isExternal) {
      return {
        target: "_blank",
        rel: "noreferrer",
      };
    }
  };

  return (
    <a
      href={to}
      className={`${styles.link} ${className}`}
      {...external()}
      {...props}
    >
      {text} <Icon className={styles.icon} />
    </a>
  );
};
