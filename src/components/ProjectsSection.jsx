import React from "react";
import ProjectEntry from "./ProjectEntry";

export default function ProjectsSection(props) {
  const div_style = {
    backgroundColor: props.color,
  };
  return (
    <>
      <div className="container my-rounded section" style={div_style}>
        <h1 id="projects">Projects</h1>

        <div className="container">
          <ProjectEntry
            title="Auto RaceCar"
            description="All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
            ullamcorper malesuada proin libero. In massa tempor nec feugiat
            nisl pretium fusce."
            link="https://github.com/Adimazuz/AutoRaceCar"
            img="res/auto-racecar.jpeg"
          />
          <hr className="d-block d-md-none " />

          <ProjectEntry
            title="Improved object detection"
            description="All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
            ullamcorper malesuada proin libero. In massa tempor nec feugiat
            nisl pretium fusce."
            link="https://github.com/DimaKolt/YoloAndmRCNN"
            img="res/od.png"
          />
          <hr className="d-block d-md-none " />

          <ProjectEntry
            title="This Website"
            description="All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
            ullamcorper malesuada proin libero. In massa tempor nec feugiat
            nisl pretium fusce."
            link="https://github.com/Adimazuz/react-personal-website"
            img="res/placeholder.jpeg"
          />
        </div>
      </div>
    </>
  );
}
