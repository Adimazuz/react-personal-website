import React from "react";

import ExperienceEntry from "./experienceEntry";
import {EXPERIENCE_DATA} from "../../data/experienceData";
import RoundedSection from "../roundedSection/RoundedSection";

export default function ExperienceSection() {
    return (
        <RoundedSection title={"Experience"}>
            <>
                {EXPERIENCE_DATA.map(experience =>
                    <div>
                        <ExperienceEntry experience={experience}/>
                        <hr className="d-block d-md-none "/>
                    </div>)
                }
            </>
        </RoundedSection>
    );
}