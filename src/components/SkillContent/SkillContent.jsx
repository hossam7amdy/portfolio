import { useState } from "react";

import styles from "./SkillContent.module.css";

import { SkillItem } from "./SkillItem";
import { MdKeyboardArrowDown } from "react-icons/md";

export const SkillContent = ({ Icon, title, subtitle, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={toggleOpen}>
      <button aria-label="toggle skills list" className={styles.header}>
        <Icon className={styles.icon} />

        <div>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>

        <MdKeyboardArrowDown
          className={`${styles.icon} ${styles.arrowIcon} ${
            isOpen ? styles.rotate : ""
          }`}
        />
      </button>

      <ul className={`${isOpen ? styles.open : styles.close} grid`}>
        {content.map((item, idx) => (
          <SkillItem key={idx} name={item.name} progress={item.progress} />
        ))}
      </ul>
    </div>
  );
};
