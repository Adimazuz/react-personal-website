import React from "react";

function createLI(text) {
  return <li>{text}</li>;
}
export default function ExperienceEntry(props) {
  return (
    <>
      <div class="experience row div-margin">
        <div class="col-md-4">
          <h4>{props.company}</h4>
          <p class="experience-period">{props.period} </p>
        </div>
        <div class="col-md-8 my-text-left">
          <strong>{props.title}</strong>
          <p class="no-pad-left">{props.description} </p>
        </div>
      </div>
    </>
  );
}
