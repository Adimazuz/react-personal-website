import React from "react";

function AboutSection(props) {
  const div_style = {
    backgroundColor: props.color,
  };

  const p_style = {
    margin: "0%",
    padding: "1 rem",
  };

  return (
    <div id="about" className="container my-rounded section" style={div_style}>
      <h1>About</h1>
      <img
        src="res/me.jpg"
        alt="Avatar"
        className="avatar avatar-xs rounded-circle img-thumbnail"
        style={{
          maxWidth: "15%",
        }}
      />

      <p style={p_style}>
        My name is Adi Mazuz, im a programmer , I recived my Bachlors degree of
        computer engineering from the Technion.
      </p>
      <p>i like to code and learn new things</p>
    </div>
  );
}

export default AboutSection;
