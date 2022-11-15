import "./App.css";

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
    </ThemeProvider>
  );
}

export default App;
