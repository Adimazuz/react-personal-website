import React from "react";
import SkillsList from "./SkillsList";
export default function Skillssection(props) {
  const div_style = {
    backgroundColor: props.color,
    padding: "2rem",
  };

  return (
    <div id="skills" class="container section my-rounded" style={div_style}>
      <h1>Skills</h1>
      <div class="container">
        <div class="row ">
          <div class="col-md-4">
            <h3>Experience with</h3>
            <SkillsList />
          </div>
          <div class="col-md-4">
            <h3>Familiar With</h3>
            <SkillsList />
          </div>
          <div class="col-md-4">
            <h3>knowledge in</h3>
            <SkillsList />
          </div>
        </div>
      </div>
    </div>
  );
}
