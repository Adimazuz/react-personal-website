import React from "react";

export default function ProjectsSection(props) {
  const div_style = {
    backgroundColor: props.color,
  };
  return (
    <>
      <div id="projects" class="container my-rounded section" style={div_style}>
        <h1>Projects</h1>

        <div class="container">
          <div class="row ">
            <div class="col-md-4">
              <img
                src="res/placeholder.jpeg"
                alt="place-holder.png"
                class="logo-image"
              />
            </div>
            <div class="col-md-8 my-text-left">
              <h4> project title</h4>
              <p class="no-pad-left">
                All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
                ullamcorper malesuada proin libero. In massa tempor nec feugiat
                nisl pretium fusce.
              </p>
            </div>
          </div>
          <div class="row ">
            <div class="col-md-4">
              <img
                src="res/placeholder.jpeg"
                alt="place-holder.png"
                class="logo-image"
              />
            </div>
            <div class="col-md-8 my-text-left">
              <h4> project title</h4>
              <p class="no-pad-left">
                All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
                ullamcorper malesuada proin libero. In massa tempor nec feugiat
                nisl pretium fusce.
              </p>
            </div>
          </div>
          <div class="row ">
            <div class="col-md-4">
              <img
                src="res/placeholder.jpeg"
                alt="place-holder.png"
                class="logo-image"
              />
            </div>
            <div class="col-md-8 my-text-left">
              <h4> project title</h4>
              <p class="no-pad-left">
                All The Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Massa id neque aliquam vestibulum morbi. Et ligula
                ullamcorper malesuada proin libero. In massa tempor nec feugiat
                nisl pretium fusce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
