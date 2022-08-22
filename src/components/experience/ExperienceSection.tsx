import React from "react";

import ExperienceEntry from "./ExperienceEntry";
import {EXPERIENCE_DATA} from "../../data/experienceData";

interface ExperienceSectionProps {
    color: string;
}

export default function ExperienceSection(props: ExperienceSectionProps) {
    const {color} = props;
    const experienceData = EXPERIENCE_DATA;
    const div_style = {
        backgroundColor: color,
    };

    return (
        <div className="container my-rounded section" style={div_style}>
            <h1>Experience</h1>
            {experienceData.map(experience =>
                <div>
                    <ExperienceEntry experience={experience}/>
                    <hr className="d-block d-md-none "/>
                </div>
            )}
        </div>
    );
}