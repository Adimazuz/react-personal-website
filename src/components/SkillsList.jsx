import React from "react";
import SkillEntry from "./skillEntry";

export default function Skillslist(props) {
  return (
    <>
      <div className="container">
        <SkillEntry
          text="python"
          alt="python-img"
          img="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
        />
        <SkillEntry
          text="Android"
          alt="android-img"
          img="res/android-image.png"
        />
        <SkillEntry text="C++" alt="cpp-img" img="res/cpp-image.png" />
      </div>
    </>
  );
}
