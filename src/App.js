import "./App.css";
import MyNav from "./components/MyNav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Imagedsection from "./components/ImagedSection";
import ExperienceSection from "./components/experience_sections";
import Skillssection from "./components/SkillsSection";

function App() {
  return (
    <div className="App">
      <MyNav />

      <Imagedsection id="home" image="res/bg-image.jpg" />
      <hr class="my-hr" />
      <Section
        id="about"
        color="#cbf1f5"
        header="About Me"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada proin libero. In massa tempor nec feugiat nisl pretium fusce. Sed adipiscing diam donec adipiscing tristique risus."
      />
      <hr class="my-hr" />
      <ExperienceSection color="#a6e3e9" />
      <hr class="my-hr" />
      <Skillssection color="#a6e3e9" />

      <hr class="my-hr" />
      <Section
        id="projects"
        color="#cbf1f5"
        header="projects"
        text="All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada proin libero. In massa tempor nec feugiat nisl pretium fusce. Sed adipiscing diam donec adipiscing tristique risus."
      />
      <Footer />
    </div>
  );
}

export default App;
