import { BiLinkExternal } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";

import styles from "./PanelItem.module.css";
import { IconLink } from "../UI/IconLink/IconLink";

export const PanelItem = ({
  title,
  subtitle,
  date,
  text,
  link,
  trackOnLeft,
}) => {
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

        {link && (
          <IconLink
            to={link}
            text={text}
            Icon={BiLinkExternal}
            isExternal={true}
            className={styles.link}
          />
        )}
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
