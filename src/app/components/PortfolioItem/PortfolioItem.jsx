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
  tools,
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

        <div className={styles.tools}>
          {tools.map((tool, idx) => (
            <span key={idx} className={styles.tool}>
              {tool}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <IconLink
            to={demo}
            text="Demo"
            Icon={BiLinkExternal}
            isExternal={true}
            aria-label="demo link"
            className={styles.link}
          />
          <IconLink
            to={github}
            text="GitHub"
            Icon={AiFillGithub}
            isExternal={true}
            aria-label="logo github"
            className={styles.link}
          />
        </div>
      </div>
    </li>
  );
};
