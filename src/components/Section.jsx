import React from "react";

function Section(props) {
  const div_style = {
    backgroundColor: props.color,
  };

  const p_style = {
    margin: "0%",
    padding: "1 rem",
  };

  return (
    <div class="container my-rounded section" id={props.id} style={div_style}>
      <h1>{props.header}</h1>
      <p style={p_style}>{props.text}</p>
    </div>
  );
}

export default Section;
