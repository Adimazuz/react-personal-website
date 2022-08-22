import React from "react";
import {ExperienceInterface} from "../../interfaces/expirenceInterface";

export interface ExperienceEntryProps {
    experience: ExperienceInterface
}

export default function ExperienceEntry(props: ExperienceEntryProps) {
    const {experience} = props;

    return (
        <>
            <div className="experience row div-margin">
                <div className="col-md-1">
                    <img src={experience.imgSrc} className="logo-image" alt={experience.imgSrc}/>
                </div>

                <div className="col-md-3 center">
                    <div>
                        <h4>
                            <strong>{experience.company}</strong>{" "}
                        </h4>
                        <p>{experience.period} </p>
                    </div>
                </div>

                <div className="col-md-8 my-text-left">
                    <>
                        <strong>{experience.title}</strong>
                        <p className="no-pad-left">
                            {experience.description}
                            {experience.bullets && experience.bullets.map((number) => <li>{number}</li>)}
                        </p>
                        {experience.link && (
                            <a href={experience.link} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link icon-margin darker-color dark-on-hover">
                                    {" "}
                                </i>
                            </a>
                        )}
                        <i className="fas fa-map-marker-alt icon-margin darker-color"/>
                        {experience.location}
                    </>
                </div>
            </div>
        </>
    );
}
