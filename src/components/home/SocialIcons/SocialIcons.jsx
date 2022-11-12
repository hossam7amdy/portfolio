import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IconLink } from "../../UI/IconLink/IconLink";

import styles from "./SocialIcons.module.css";

export const SocialIcons = () => {
  return (
    <div className={styles.socials}>
      <IconLink
        className={styles.icon}
        to="https://www.linkedin.com/in/hossam7amdy/"
        isExternal={true}
        Icon={SlSocialLinkedin}
        aria-label="logo linkedin"
      />
      <IconLink
        className={styles.icon}
        Icon={FiGithub}
        to="https://github.com/hossam7amdy"
        isExternal={true}
        aria-label="logo github"
      />
    </div>
  );
};
