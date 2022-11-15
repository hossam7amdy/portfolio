import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import styles from "./Portfolio.module.css";
import { Section } from "../../layout/Section/Section";
import { PROJECTS } from "../../data/data";
import { Container } from "../../layout/Container/Container";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";

export const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const arrowClick = (dir) => {
    const len = PROJECTS.length - 1;

    if (dir === "left") {
      setIndex((prev) => (prev === 0 ? len : prev - 1));
    } else {
      setIndex((prev) => (prev === len ? 0 : prev + 1));
    }
  };

  return (
    <Section id="portfolio">
      <SectionTitle title="Portfolio" subtitle="Most recent work" />

      <Container className={`${styles.container} grid`}>
        <ul className={styles.projects}>
          {PROJECTS.map((project, idx) => (
            <PortfolioItem
              key={idx}
              index={index}
              img={project.image}
              name={project.name}
              decription={project.description}
              demo={project.demo}
              github={project.github}
              tools={project.tools}
            />
          ))}
        </ul>

        <button
          aria-label="left arrow"
          className={styles.arrowL}
          onClick={() => arrowClick("left")}
        >
          <MdKeyboardArrowLeft className={styles.icon} />
        </button>
        <button
          aria-label="right arrow"
          className={styles.arrowR}
          onClick={() => arrowClick("right")}
        >
          <MdKeyboardArrowRight className={styles.icon} />
        </button>
      </Container>
    </Section>
  );
};
