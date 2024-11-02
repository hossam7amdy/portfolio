import { CiMedal } from 'react-icons/ci';
import { FaHackerrank } from 'react-icons/fa';
import { BiCertification } from 'react-icons/bi';
import { SiLeetcode, SiCodeforces, SiUdemy } from 'react-icons/si';

import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { PanelItem } from '../../components/PanelItem/PanelItem';
import { TabPanels } from '../../components/Tabs/TabPanels/TabPanels';
import { Container } from '../../layout/Container/Container';
import { Section } from '../../layout/Section/Section';
import { TabList } from '../../components/Tabs/TabList/TabList';
import { Panel } from '../../components/Tabs/Panel/Panel';
import { Tabs } from '../../components/Tabs/Tabs';
import { Tab } from '../../components/Tabs/Tab/Tab';

export const Achievements = () => {
  return (
    <Section>
      <SectionTitle title="Achievements" subtitle="Consistency leads to great achievements" />

      <Container centerContent={true}>
        <Tabs>
          <TabList>
            <Tab id={0}>
              <BiCertification /> Certifications & Licenses
            </Tab>
            <Tab id={1}>
              <CiMedal /> Competitive Programming
            </Tab>
          </TabList>

          <TabPanels>
            <Panel id={0}>
              <PanelItem
                title="Complete NodeJS Developer in 2023 (GraphQL, MongoDB)"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="Dec 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-c3e1452d-7d8e-4211-af18-45b0548ba648/"
                text="Show credential"
              />
              <PanelItem
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="Oct 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-1a1ee55d-18c8-43a1-9264-b1c9ba1dc6a5/"
                text="Show credential"
                trackOnLeft={true}
              />
              <PanelItem
                title="The Complete JavaScript Course 2022: From Zero to Expert!"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="July 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-3596dff2-c77a-4833-a101-0f3a28520615/"
                text="Show credential"
              />
              <PanelItem
                title="Build Responsive Real-World Websites with HTML and CSS"
                subtitle={
                  <>
                    <SiUdemy /> Udemy
                  </>
                }
                date="May 2022 - No Expiration Date"
                link="https://www.udemy.com/certificate/UC-d3aa24a3-1cfe-4c17-b6b6-5d300c399ca0/"
                text="Show credential"
                trackOnLeft={true}
              />
            </Panel>
            <Panel id={1}>
              <PanelItem
                title="SQL Gold Badge"
                subtitle={
                  <>
                    <FaHackerrank /> HackerRank
                  </>
                }
                date="December 2021 - No Expiration Date"
                link="https://www.hackerrank.com/hossamhamdy117"
                text="Show profile"
                trackOnLeft={true}
              />
              <PanelItem
                title="140+ Problems"
                subtitle={
                  <>
                    <SiCodeforces /> CodeForces
                  </>
                }
                date="May 2021 - No Expiration Date"
                link="https://codeforces.com/profile/hossamhamdy117"
                text="Show profile"
              />
              <PanelItem
                title="145+ Problems"
                subtitle={
                  <>
                    <SiLeetcode /> LeetCode
                  </>
                }
                date="April 2021 - No Expiration Date"
                link="https://leetcode.com/hossam7amdy/"
                text="Show profile"
                trackOnLeft={true}
              />
            </Panel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
