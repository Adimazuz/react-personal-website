import React from "react";

import ExperienceEntry from "./ExperienceEntry";
import {EXPERIENCE_DATA} from "../../data/experienceData";
import RoundedSection from "../roundedSection/RoundedSection";

export default function ExperienceSection() {
    const experienceData = EXPERIENCE_DATA;

    return (
        <RoundedSection title={"Experience"}>
            <>
                {experienceData.map(experience =>
                    <div>
                        <ExperienceEntry experience={experience}/>
                        <hr className="d-block d-md-none "/>
                    </div>)
                }
            </>
        </RoundedSection>
    );
}