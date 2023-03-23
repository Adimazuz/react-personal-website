import React from "react";
import ProjectEntry from "./ProjectEntry";
import RoundedSection from "../roundedSection/RoundedSection";
import {PROJECTS_DATA} from "../../data/projectData";


export default function ProjectsSection() {

  return (
      <RoundedSection title={"Projects"}>
          <>
            {PROJECTS_DATA.map(project =>
            <>
              <ProjectEntry project={project}/>
              <hr className="d-block d-md-none " />
            </>
              )}
        </>
      </RoundedSection>
  );
}
