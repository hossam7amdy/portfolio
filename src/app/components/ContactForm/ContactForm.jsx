"use client";

import { useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { RiMailSendLine } from "react-icons/ri";

import styles from "./ContactForm.module.css";
import { sendEmail } from "../../actions";

const initialState = { message: null, errors: {} };

export const ContactForm = () => {
  const formRef = useRef(null);
  const [state, dispatch] = useFormState(sendEmail, initialState);

  const handleSubmit = async (formData) => {
    dispatch(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} name="contact-me" action={handleSubmit}>
      <div className={styles.content}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          required
          type="text"
          minLength={5}
          maxLength={50}
          name="name"
          // placeholder="Full Name"
          className={styles.input}
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          required
          name="email"
          type="email"
          minLength={5}
          maxLength={50}
          className={styles.input}
          // placeholder="example@gmail.com"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="project" className={styles.label}>
          Project
        </label>
        <input
          id="project"
          required
          type="text"
          minLength={5}
          maxLength={50}
          name="project"
          className={styles.input}
          // placeholder="Project Name"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={7}
          cols={7}
          name="message"
          minLength={10}
          maxLength={500}
          className={styles.input}
          // placeholder="Your Message"
        />
      </div>

      {state.message && (
        <p style={{ color: "red", padding: 5 }} key={state.message}>
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.btn} disabled={pending}>
      {pending ? "Sending..." : "Send Message"}{" "}
      <RiMailSendLine className={styles.icon} />
    </button>
  );
};
