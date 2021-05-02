import React from "react";

function createLI(text) {
  return <li>{text}</li>;
}
export default function ExperienceEntry(props) {
  return (
    <>
      <div class="container exp">
        <div class="row">
          <div class="col-md-3">
            <img
              src="res/intel-logo.png"
              alt="intel-logo.png"
              class="logo-image"
            />
          </div>
          <div class="col-md-3">
            <img
              src="res/intel-logo.png"
              alt="intel-logo.png"
              class="logo-image"
            />
          </div>
          <div class="col-md-6">
            <h1>{props.company}</h1>
            <h2>{props.product}</h2>
            <h3>{props.dates}</h3>
            <p>{props.description}</p>
            <div class="row"></div>
            <ul>{props.bullet_points.map(createLI)} </ul>
          </div>
        </div>
      </div>
    </>
  );
}
