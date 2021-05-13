import React from "react";

export default function ExperienceEntry(props) {
  return (
    <>
      <div class="experience row div-margin">
        <div class="col-md-1">
          <img src={props.img} class="logo-image" alt={props.img} />
        </div>

        <div class="col-md-3 center">
          <div>
            <h4>
              <strong>{props.company}</strong>{" "}
            </h4>
            <p>{props.period} </p>
          </div>
        </div>

        <div class="col-md-8 my-text-left">
          <strong>{props.title}</strong>
          <p class="no-pad-left">{props.description} </p>
          {props.link && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-link icon-margin"> </i>
            </a>
          )}
          <i class="fas fa-map-marker-alt icon-margin"></i> {props.location}
        </div>
      </div>
    </>
  );
}
