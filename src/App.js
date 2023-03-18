import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <>
    <AlertProvider>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </AlertProvider>
    </>
  );
}

export default App;
