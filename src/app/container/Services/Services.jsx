import styles from "./Services.module.css";

import { SERVICES_LIST } from "../../data/data";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ServiceItem } from "../../components/ServiceItem/ServiceItem";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";

export const Services = () => {
  return (
    <Section id="services">
      <SectionTitle title="Services" subtitle="What I offer" />

      <Container className={`${styles.service} grid`}>
        {SERVICES_LIST.map((service, idx) => (
          <ServiceItem
            key={idx}
            Icon={service.Icon}
            title={service.title}
            content={service.content}
          />
        ))}
      </Container>
    </Section>
  );
};
