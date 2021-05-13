import React from "react";

export default function ExperienceEntry(props) {
  return (
    <>
      <div className="experience row div-margin">
        <div className="col-md-1">
          <img src={props.img} className="logo-image" alt={props.img} />
        </div>

        <div className="col-md-3 center">
          <div>
            <h4>
              <strong>{props.company}</strong>{" "}
            </h4>
            <p>{props.period} </p>
          </div>
        </div>

        <div className="col-md-8 my-text-left">
          <strong>{props.title}</strong>
          <p>{props.description}</p>
          {props.link && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link icon-margin darker-color"> </i>
            </a>
          )}
          <i
            className="fas fa-map-marker-alt icon-margin darker-color"
            color="red"
          ></i>{" "}
          {props.location}
        </div>
      </div>
    </>
  );
}
