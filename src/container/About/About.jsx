import { MdOutlineFileDownload } from "react-icons/md";

import cv from "../../assets/Hossam-Hamdy.pdf";
import styles from "./About.module.css";
import aboutImg from "../../assets/about.jpg";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../layout/Container/Container";
import { IconLink } from "../../components/UI/IconLink/IconLink";
import { Section } from "../../layout/Section/Section";

export const About = () => {
  return (
    <Section id="about">
      <SectionTitle title="About Me" subtitle="Introduction" />

      <Container className={`${styles.container} grid`} centerContent={true}>
        <img src={aboutImg} alt="Hossam" className={styles.img} />

        <div>
          <p className={styles["about-description"]}>
            A passionate competitive-programmer. Specialized in web development
            with MERN stack technologies I can design, develop, and maintain
            fully-fledged and functioning platforms with databases or servers.
          </p>
          <div className={styles.info}>
            <div>
              <p className={styles["info-title"]}>10+</p>
              <span className={styles["info-name"]}>
                Completed <br /> Projects
              </span>
            </div>

            <div>
              <p className={styles["info-title"]}>500+</p>
              <span className={styles["info-name"]}>
                Solved <br /> Problems
              </span>
            </div>
          </div>
          <IconLink to={cv} text="Download CV" Icon={MdOutlineFileDownload} />
        </div>
      </Container>
    </Section>
  );
};
