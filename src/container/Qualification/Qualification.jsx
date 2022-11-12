import { SlGraduation } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";

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
