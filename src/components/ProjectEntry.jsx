import React from "react";

export default function ProjectEntry(props) {
  return (
    <div className="row ">
      <div className="col-md-4">
        <img src={props.img} alt={props.img} className="project-image" />
      </div>
      <div className="col-md-8 my-text-left center">
        <strong>
          <h4> {props.title}</h4>
        </strong>
        <p className="no-pad-left">{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x darker-color"> </i>
        </a>
      </div>
    </div>
  );
}
