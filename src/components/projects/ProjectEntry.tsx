import React from "react";
import {ProjectInterface} from "../../interfaces/projectInterface";
import styles from './projectEntry.module.scss';

interface ProjectEntryProps {
    project: ProjectInterface
}

export default function ProjectEntry(props: ProjectEntryProps) {
    const {project} = props;

    return (
        <div className="row div-margin">
            <div className="col-md-4">
                <img src={project.imageSrc} alt={project.imageSrc} className="project-image"/>
            </div>
            <div className="col-md-8 my-text-left center">
                <strong>
                    <div className={styles.title}> {project.title}</div>
                </strong>
                <p className="no-pad-left">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-1x darker-color dark-on-hover projectIcon">
                        {" "}
                        GitHub
                    </i>
                </a>
            </div>
        </div>
    );
}
