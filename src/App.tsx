import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Imagedsection from "./components/ImagedSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import AboutSection from "./components/AboutSection";
import React from "react";

function App() {
  return (
    <div className="App">
      <MyNav />

      <Imagedsection id="home" imageSrc="res/bg-image.jpg" />

      <hr className="my-hr" />

      <AboutSection color="#cbf1f5" />

      <hr className="my-hr" id="experience" />

      <ExperienceSection/>

      <hr className="my-hr" id="skills" />

      <SkillsSection/>

      <hr className="my-hr" id="projects"/>

      <ProjectsSection />

      <Footer />
    </div>
  );
}


export default App;
