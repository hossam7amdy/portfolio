import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

import { IconLink } from "../UI/IconLink/IconLink";
import styles from "./PortfolioItem.module.css";

export const PortfolioItem = ({
  index,
  img,
  name,
  decription,
  demo,
  github,
}) => {
  return (
    <li
      className={styles.project}
      style={{ transform: `translateX(${index * -100}%)` }}
    >
      <img className={styles.img} src={img} alt={name} />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.decription}>{decription}</p>

        <div className={styles.links}>
          <IconLink
            to={demo}
            Icon={BiLinkExternal}
            isExternal={true}
            aria-label="demo link"
          />
          <IconLink
            to={github}
            Icon={AiFillGithub}
            isExternal={true}
            aria-label="logo github"
          />
        </div>
      </div>
    </li>
  );
};
