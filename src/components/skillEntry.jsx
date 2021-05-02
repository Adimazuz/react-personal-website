import React from "react";

export default function Skillentry(props) {
  const img_style = {
    marginRight: "0.5rem",
  };

  return (
    <>
      <div class="container">
        <div align="left">
          <img
            class="bullet-logo"
            src={props.img}
            alt={props.alt}
            style={img_style}
          />
          {props.text}
        </div>
      </div>
    </>
  );
}
