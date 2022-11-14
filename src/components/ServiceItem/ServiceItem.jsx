import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from "./ServiceItem.module.css";
import { Card } from "../UI/Card/Card";
import { Modal } from "../UI/Modal/Modal";

const ContentList = (content) => {
  return (
    <ul>
      {content.map((item, idx) => (
        <li key={idx} className={styles["service-item"]}>
          <AiOutlineCheckCircle className={styles["item-icon"]} /> {item}
        </li>
      ))}
    </ul>
  );
};

export const ServiceItem = ({ Icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const titleArr = title.split(" ");
  const secondLine = titleArr.slice(1).join(" ");

  const body = ContentList(content);

  return (
    <>
      <Modal header={title} body={body} onClose={onClose} isOpen={isOpen} />
      <Card className={styles.content}>
        <Icon className={styles.icon} />
        <h3 className={styles.title}>
          {titleArr[0]} <br /> {secondLine}
        </h3>
        <button aria-label="open modal" className={styles.btn} onClick={onOpen}>
          View more <BsArrowRightShort className={styles["btn-icon"]} />
        </button>
      </Card>
    </>
  );
};
