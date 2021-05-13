import React from "react";
import SkillsList from "./SkillsList";
import SkillEntry from "./skillEntry";

export default function Skillssection(props) {
  const div_style = {
    backgroundColor: props.color,
    padding: "2rem",
  };

  return (
    <div class="container section my-rounded" style={div_style}>
      <h1>Skills</h1>
      <div class="container">
        <div class="row ">
          <div class="col-md-4">
            <h3>Experience with</h3>
            <SkillsList />
          </div>
          <div class="col-md-4">
            <h3>Familiar With</h3>
            <SkillEntry
              text="HTML"
              alt="html-img"
              img="https://www.flaticon.com/svg/vstatic/svg/888/888859.svg?token=exp=1620889326~hmac=0953399c2152a6d747c028d905648b90"
            />
            <SkillEntry
              text="CSS"
              alt="css-img"
              img="https://www.flaticon.com/svg/vstatic/svg/732/732190.svg?token=exp=1620889334~hmac=bc0826261050e383fa26742cd862571f"
            />

            <SkillEntry
              text="JavaScript"
              alt="js-img"
              img="https://www.flaticon.com/svg/vstatic/svg/136/136530.svg?token=exp=1620889351~hmac=9a88be4e9ebe737833bf21de43c4c72b"
            />
            <SkillEntry
              text="Node.js"
              alt="nodejs-img"
              img="https://www.flaticon.com/svg/vstatic/svg/919/919825.svg?token=exp=1620890037~hmac=04f3ea2624e954952a335dfee49827b1"
            />
            <SkillEntry
              text="React"
              alt="react-img"
              img="https://www.flaticon.com/svg/vstatic/svg/1126/1126012.svg?token=exp=1620889924~hmac=2aee5e6ae81a67bce2219048ea1878d1"
            />
            <SkillEntry
              text="MongoDB"
              alt="mongodb-img"
              img="res/mongodb.png"
            />
          </div>
          <div class="col-md-4">
            <h3>knowledge in</h3>
            <SkillEntry
              text="Data Structures"
              alt="Data-Structures-img"
              img="https://www.flaticon.com/svg/vstatic/svg/3079/3079384.svg?token=exp=1620890328~hmac=037f035e803b57147bccc02d163b1a51"
            />
            <SkillEntry
              text="Algorithms"
              alt="Algorithms-img"
              img="https://www.flaticon.com/svg/vstatic/svg/1628/1628175.svg?token=exp=1620890360~hmac=5b8a56baadfc9d3eadec8986c7a804c4"
            />
            <SkillEntry
              text="Operating systems"
              alt="os-img"
              img="https://www.flaticon.com/svg/vstatic/svg/2172/2172894.svg?token=exp=1620890381~hmac=b884d6507ecc0b31063ea44fe136ce92"
            />
            <SkillEntry
              text="Computer security"
              alt="Computer-security-img"
              img="https://www.flaticon.com/svg/vstatic/svg/3208/3208680.svg?token=exp=1620890422~hmac=5eaa1cf6f6c883945305c75b53418843"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
