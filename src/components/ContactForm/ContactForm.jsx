import { RiMailSendLine } from "react-icons/ri";

import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form name="contact" netlify>
      <div className={styles.content}>
        <label htmlFor="full-name" className={styles.label}>
          Name
        </label>
        <input
          name="full-name"
          placeholder="Hossam Hamdy"
          className={styles.input}
          type="text"
          maxLength={50}
          required
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          name="email"
          placeholder="example@gmail.com"
          className={styles.input}
          type="email"
          min={5}
          maxLength={50}
          required
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="project" className={styles.label}>
          Project
        </label>
        <input
          placeholder="react project"
          className={styles.input}
          type="text"
          maxLength={50}
          required
          name="project"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          placeholder="message"
          className={styles.input}
          cols={0}
          rows={7}
          required
          name="message"
        />
      </div>

      <button type="submit" className={styles.btn}>
        Send Message <RiMailSendLine className={styles.icon} />
      </button>
    </form>
  );
};
