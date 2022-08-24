import React from "react";
import {SkillsInterface} from "../../interfaces/skillsInterface";

import styles from './skillsEntry.module.scss';

interface SkillEntryProps {
    skill: SkillsInterface
}

export default function SkillEntry(props: SkillEntryProps) {
    const {skill} = props;

    return (
        <>
            <div className={styles.row}>
                    <img
                        className={styles.logo}
                        src={skill.img}
                        alt={skill.alt}
                    />
                    <div>{skill.text}</div>
            </div>
        </>
    );
}
