import "./App.css";
import MyNav from "./components/MyNav";
import Section from "./components/AboutSection";
import Footer from "./components/Footer";
import Imagedsection from "./components/ImagedSection";
import ExperienceSection from "./components/experience_sections";
import Skillssection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <MyNav />

      <Imagedsection id="home" image="res/bg-image.jpg" />

      <hr class="my-hr" />

      <AboutSection color="#cbf1f5" />

      <hr class="my-hr" />

      <ExperienceSection color="#a6e3e9" />

      <hr class="my-hr" />

      <Skillssection color="#a6e3e9" />

      <hr class="my-hr" />

      <ProjectsSection color="#cbf1f5" />

      <Footer />
    </div>
  );
}

export default App;
