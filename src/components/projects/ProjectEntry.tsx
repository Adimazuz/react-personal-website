import React from "react";

interface ProjectEntryProps {
    title: string
    description: string
    link: string
    imageSrc: string
}

export default function ProjectEntry(props: ProjectEntryProps) {
    const {title, description ,link ,imageSrc} = props;

    return (
        <div className="row div-margin">
            <div className="col-md-4">
                <img src={imageSrc} alt={imageSrc} className="project-image"/>
            </div>
            <div className="col-md-8 my-text-left center">
                <strong>
                    <h4> {title}</h4>
                </strong>
                <p className="no-pad-left">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-1x darker-color dark-on-hover">
                        {" "}
                        GitHub
                    </i>
                </a>
            </div>
        </div>
    );
}
