import { RiMailSendLine } from "react-icons/ri";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <NetlifyForm
      name="Contact"
      action="/thanks"
      honeypotName="bot-field"
      onSuccess={(_, context) => context.formRef.current.reset()}
    >
      {({ handleChange, success, error }) => (
        <>
          <div className={styles.content}>
            <label htmlFor="full-name" className={styles.label}>
              Name
            </label>
            <input
              required
              type="text"
              minLength={5}
              maxLength={50}
              name="full-name"
              // placeholder="Full Name"
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.content}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              minLength={5}
              maxLength={50}
              onChange={handleChange}
              className={styles.input}
              // placeholder="example@gmail.com"
            />
          </div>

          <div className={styles.content}>
            <label htmlFor="project" className={styles.label}>
              Project
            </label>
            <input
              required
              type="text"
              minLength={5}
              maxLength={50}
              name="project"
              onChange={handleChange}
              className={styles.input}
              // placeholder="Project Name"
            />
          </div>

          <div className={styles.content}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              required
              rows={7}
              name="message"
              minLength={10}
              maxLength={500}
              onChange={handleChange}
              className={styles.input}
              // placeholder="Your Message"
            />
          </div>

          <Honeypot />
          {success && <p style={{ padding: 5 }}>Thanks for contacting me!</p>}
          {error && (
            <p style={{ color: "red", padding: 5 }}>
              Sorry, we could not reach our servers. Please try again later.
            </p>
          )}

          <button type="submit" className={styles.btn}>
            Send Message <RiMailSendLine className={styles.icon} />
          </button>
        </>
      )}
    </NetlifyForm>
  );
};
