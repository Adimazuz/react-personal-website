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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                    <strong>
                        <div className={`${styles.title} dark-on-hover`}> {project.title}</div>
                    </strong>
                </a>
                <p className="no-pad-left">{project.description}</p>
            </div>
        </div>
    );
}
