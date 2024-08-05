import styles from "./Home.module.css";

import { ImageIcon, Content, SocialIcons } from "../../components/home/index";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";

export const Home = () => {
  return (
    <Section id="home">
      <Container className={`${styles.container} grid`}>
        <SocialIcons />
        <ImageIcon />
        <Content />
      </Container>
    </Section>
  );
};
