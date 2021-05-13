import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Imagedsection from "./components/ImagedSection";
import ExperienceSection from "./components/ExperienceSection";
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

      <hr class="my-hr" id="experience" />

      <ExperienceSection color="#a6e3e9" />

      <hr class="my-hr" id="skills" />

      <Skillssection color="#a6e3e9" />

      <hr class="my-hr" />

      <ProjectsSection color="#cbf1f5" />

      <Footer />
    </div>
  );
}

export default App;
