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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Massa id neque
        aliquam vestibulum morbi. Et ligula ullamcorper malesuada proin libero.
      </p>
    </div>
  );
}

export default AboutSection;
