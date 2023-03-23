import React from "react";
import SkillEntry from "./skillEntry";
import RoundedSection from "../roundedSection/RoundedSection";
import {SKILLS_EXPERIENCED_WEB, SKILLS_EXPRIENCED, SKILLS_KNOWLEDGE} from "../../data/skillsData";
import styles from './skillsSection.module.scss';


export default function SkillsSection() {

    return (
        <RoundedSection title={"Skills"}>
            <>
                <div className={`row`}>
                    <div className={`col-md-4 `}>
                        <div className={styles.rowContainer}>
                            <h3>Experience with</h3>
                            {SKILLS_EXPRIENCED.map(skill => <SkillEntry skill={skill}/>)}
                        </div>

                    </div>

                    <div className="col-md-4 skills-col">
                        <div className={styles.rowContainer}>

                            <h3>Web Experience</h3>
                            {SKILLS_EXPERIENCED_WEB.map(skill => <SkillEntry skill={skill}/>)}
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className={styles.rowContainer}>

                            <h3>knowledge in</h3>
                            {SKILLS_KNOWLEDGE.map(skill => <SkillEntry skill={skill}/>)}
                        </div>
                    </div>
                </div>
            </>
        </RoundedSection>
    );
}
