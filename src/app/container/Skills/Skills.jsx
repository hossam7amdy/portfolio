import styles from "./Skills.module.css";

import { SKILLS } from "../../data/data";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { SkillContent } from "../../components/SkillContent/SkillContent";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle title="Skills" subtitle="Technical Level" />

      <Container className={`${styles.container} grid`}>
        {SKILLS.map((skill, idx) => (
          <SkillContent
            key={idx}
            Icon={skill.Icon}
            title={skill.title}
            subtitle={skill.subtitle}
            content={skill.content}
          />
        ))}
      </Container>
    </Section>
  );
};
