import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Imagedsection from "./components/ImagedSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
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

      <ExperienceSection color="#cbf1f5" />

      <hr className="my-hr" id="skills" />

      <SkillsSection color="#cbf1f5" />

      <hr className="my-hr" />

      <ProjectsSection color="#cbf1f5" />

      <Footer />
    </div>
  );
}

export default App;
