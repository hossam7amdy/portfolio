import { MdOutlineFileDownload } from "react-icons/md";

import cv from "../../assets/Hossam-Hamdy.pdf";
import styles from "./About.module.css";

import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../layout/Container/Container";
import { IconLink } from "../../components/UI/IconLink/IconLink";
import { Section } from "../../layout/Section/Section";

export const About = () => {
  return (
    <Section id="about">
      <SectionTitle title="About Me" subtitle="Introduction" />

      <Container className={`${styles.container}`} centerContent={true}>
        <div className={styles["about-content"]}>
          <div style={{ flex: 3 }}>
            <p className={styles["about-description"]}>
              Dedicated and competitive, I specialize in web development with a
              focus on the MERN stack. My expertise lies in designing,
              developing, and maintaining robust platforms complete with
              databases and servers. As a Full Stack Engineer, I've navigated
              the realms of real-time chat and video calls, incorporating
              Firebase for push notifications and WebSockets for in-app alerts.
              Noteworthy projects include implementing user authentication with
              AWS Cognito, optimizing file storage solutions using AWS S3, and
              integrating an image annotator with Google Maps, backed by AWS
              Cognito for secure user authentication.
            </p>
          </div>

          <div style={{ flex: 2 }}>
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
        </div>
      </Container>
    </Section>
  );
};
