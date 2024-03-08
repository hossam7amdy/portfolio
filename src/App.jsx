import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
} from "./container";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="main">
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
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
