import React from "react";

export default function ProjectEntry(props) {
  return (
    <div class="row ">
      <div class="col-md-4">
        <img src={props.img} alt={props.img} class="project-image" />
      </div>
      <div class="col-md-8 my-text-left center">
        <strong>
          <h4> {props.title}</h4>
        </strong>
        <p class="no-pad-left">{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github fa-2x darker-color"> </i>
        </a>
      </div>
    </div>
  );
}
