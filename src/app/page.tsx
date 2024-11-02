'use client';

import {
  Header,
  Home,
  About,
  Skills,
  Qualification,
  Services,
  Achievements,
  Portfolio,
  Contact,
  Footer,
} from '../container';

import styles from './page.module.css';

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
