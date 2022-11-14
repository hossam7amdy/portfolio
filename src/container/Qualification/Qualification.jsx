import { SlGraduation } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { BiCertification } from "react-icons/bi";

import { QualificationItem } from "../../components/QualificationItem/QualificationItem";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TabPanels } from "../../components/Tabs/TabPanels/TabPanels";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { TabList } from "../../components/Tabs/TabList/TabList";
import { Panel } from "../../components/Tabs/Panel/Panel";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab/Tab";

export const Qualification = () => {
  return (
    <Section id="qualification">
      <SectionTitle title="Qualification" subtitle="Personal Journey" />

      <Container centerContent={true}>
        <Tabs>
          <TabList>
            <Tab id={0}>
              <SlGraduation /> Education
            </Tab>
            <Tab id={1}>
              <BiCertification /> Certifications
            </Tab>
            <Tab id={2}>
              <BsBriefcase /> Work
            </Tab>
          </TabList>

          <TabPanels>
            <Panel id={0}>
              <QualificationItem
                title="Computer Science"
                subtitle="Cairo University"
                date="2020 - 2022"
              />
              <QualificationItem
                title="Accountant"
                subtitle="Tanta University"
                date="2014 - 2018"
                trackOnLeft={true}
              />
            </Panel>
            <Panel id={1}>
              <QualificationItem
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                subtitle="Udemy"
                date="Oct 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-1a1ee55d-18c8-43a1-9264-b1c9ba1dc6a5/"
              />
              <QualificationItem
                title="The Complete JavaScript Course 2023: From Zero to Expert!"
                subtitle="Udemy"
                date="July 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-3596dff2-c77a-4833-a101-0f3a28520615/"
                trackOnLeft={true}
              />
              <QualificationItem
                title="Build Responsive Real-World Websites with HTML and CSS"
                subtitle="Udemy"
                date="May 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-d3aa24a3-1cfe-4c17-b6b6-5d300c399ca0/"
              />
            </Panel>
            <Panel id={2}>
              <QualificationItem
                title="Graduation Project"
                subtitle="Cairo University"
                date="Feb 2022 - Oct 2022"
                trackOnLeft={true}
              />
            </Panel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
