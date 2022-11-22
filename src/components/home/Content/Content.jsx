import { BiSend } from "react-icons/bi";
import { IconLink } from "../../UI/IconLink/IconLink";
import { ScrollBtn } from "../ScrollBtn/ScrollBtn";

import styles from "./Content.module.css";

export const Content = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Hi, I'm Hossam</h2>
      <h3 className={styles.subtitle}>Frontend developer</h3>
      <p className={styles.description}>
        I make reactive web application, producing high level quality work.
      </p>

      <IconLink to="#contactme" text="Contact Me" Icon={BiSend} />
      <ScrollBtn />
    </div>
  );
};
