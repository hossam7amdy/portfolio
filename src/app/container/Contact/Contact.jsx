import styles from "./Contact.module.css";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactItem } from "../../components/ContactItem/ContactItem";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { CONTACT } from "../../data/data";

export const Contact = () => {
  return (
    <Section id="contactme">
      <SectionTitle title="Contact Me" subtitle="Get in touch" />
      <Container className={`${styles.container} grid`}>
        <div className={styles.contact}>
          {CONTACT.map((item, idx) => (
            <ContactItem
              key={idx}
              Icon={item.Icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
};
