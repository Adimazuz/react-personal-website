import React from "react";
import SkillsList from "./SkillsList";
import SkillEntry from "./skillEntry";

export default function Skillssection(props) {
  const div_style = {
    backgroundColor: props.color,
    padding: "2rem",
  };

  return (
    <div className="container section my-rounded" style={div_style}>
      <h1>Skills</h1>
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <h3>Experience with</h3>
            <SkillsList />
          </div>
          <hr className="d-block d-md-none " />

          <div className="col-md-4 skills-col">
            <h3>Familiar With</h3>
            <SkillEntry text="HTML" alt="html-img" img="res/html.svg" />
            <SkillEntry text="CSS" alt="css-img" img="res/css.svg" />
            <SkillEntry text="JavaScript" alt="js-img" img="res/js.svg" />
            <SkillEntry text="Node.js" alt="nodejs-img" img="res/node.svg" />
            <SkillEntry text="React" alt="react-img" img="res/react.svg" />
            <SkillEntry
              text="MongoDB"
              alt="mongodb-img"
              img="res/mongodb.png"
            />
          </div>
          <hr className="d-block d-md-none " />

          <div className="col-md-4">
            <h3>knowledge in</h3>
            <SkillEntry
              text="Data Structures"
              alt="Data-Structures-img"
              img="res/ds.svg"
            />
            <SkillEntry
              text="Algorithms"
              alt="Algorithms-img"
              img="res/alg.svg"
            />
            <SkillEntry
              text="Operating systems"
              alt="os-img"
              img="res/os.svg"
            />
            <SkillEntry
              text="Computer security"
              alt="Computer-security-img"
              img="res/csec.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
