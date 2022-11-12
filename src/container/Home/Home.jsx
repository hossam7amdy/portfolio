import styles from "./Home.module.css";

import { Image, Content, SocialIcons } from "../../components/home/index";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";

export const Home = () => {
  return (
    <Section id="home">
      <Container className={`${styles.container} grid`}>
        <SocialIcons />
        <Image />
        <Content />
      </Container>
    </Section>
  );
};
