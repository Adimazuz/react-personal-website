import React from "react";

interface ExperienceEntryProps {
  company : string
  period : string
  title : string
  description : string
  link? : string
  location : string
  imgSrc : string
  bullets : string[]
}

export default function ExperienceEntry(props : ExperienceEntryProps) {

  const {company, period, title, description, link, location, imgSrc, bullets} = props;

  return (
    <>
      <div className="experience row div-margin">
        <div className="col-md-1">
          <img src={imgSrc} className="logo-image" alt={imgSrc} />
        </div>

        <div className="col-md-3 center">
          <div>
            <h4>
              <strong>{company}</strong>{" "}
            </h4>
            <p>{period} </p>
          </div>
        </div>

        <div className="col-md-8 my-text-left">
          <strong>{title}</strong>
          <p className="no-pad-left">
            {description}
            {bullets && bullets.map((number) => <li>{number}</li>)}
          </p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link icon-margin darker-color dark-on-hover">
                {" "}
              </i>
            </a>
          )}
          <i className="fas fa-map-marker-alt icon-margin darker-color"></i>{" "}
          {location}
        </div>
      </div>
    </>
  );
}
